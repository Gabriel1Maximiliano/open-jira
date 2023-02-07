import List from "@mui/material/List"
import Paper from "@mui/material/Paper"
import { EntriesContext } from "context/entries"
import { EntryStatus } from "interfaces"
import { FC, useContext, useMemo,DragEvent, DragEventHandler, HTMLAttributes, DetailedHTMLProps } from "react"
import { EntryCard } from "./EntryCard"
import { UIContext } from './UIContext';
import styles from './EntryList.module.css';

interface Props {
    status:EntryStatus
}

export const EntryList:FC<Props> = ({status}) => {

    const { entries,updateEntry }=useContext( EntriesContext );
    const { isDragging,endDragging }=useContext( UIContext );

    const entriesByStatus = useMemo(()=> entries.filter(entry=> entry.status === status),[entries]);

    const allowDrop =(event:DragEvent<HTMLDivElement>)=>{
    event.preventDefault();
 
 
    }
   const onDropEntry = (e:DragEvent<HTMLDivElement>)=>{
     const id = e.dataTransfer.getData('text');
    const entry = entries.find(el => el._id === id )!;
    entry.status = status;
    updateEntry( entry );
    endDragging();
   
   }
  
  return (
   <div
   draggable  
   onDrop={ onDropEntry }
   onDragOver={ allowDrop }
   className={ isDragging ? styles.dragging :'' }
   
   >
    <Paper sx={{ height:'400px', overflow:"scroll-hidden",backgroundColor:'#65656B', padding:'10px 5px' }}  >
        {/* todo: cambiara depende si hago drag o no */}
        <List sx={{ opacity:isDragging ? 0.2 : 1,transition:'all .3s' }} >
            {
                entriesByStatus.map( entry=>( <EntryCard key={entry._id} entry={ entry }/>) )
            }
        </List>
    </Paper>
   </div>
  )
}
