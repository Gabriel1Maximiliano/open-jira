import { Card, CardActionArea, CardActions, CardContent } from "@mui/material"
import Typography from "@mui/material/Typography"
import { DragEvent, FC, useContext } from 'react';
import { Entry } from '../../interfaces/entries';
import { UIContext } from './UIContext';

interface Props {
    entry:Entry;
}
export const EntryCard:FC<Props> = ({ entry }) => {

    const { endDragging,startDragging }= useContext( UIContext );

    const onDragStart =(e:DragEvent)=>{
        console.log('soy drag start')
        e.dataTransfer.setData('text',entry._id);
        startDragging();
    }

    const onDragEnd =(e: any)=>{
        const id = e.dataTransfer.getData('text');
        endDragging();
    }

   

  return (
   <Card 
   sx={{marginBotton:1}}
   draggable
   onDragStart={ onDragStart }
   onDragEnd = { onDragEnd }
   >
   
    <CardActionArea>
        <CardContent>
            <Typography whiteSpace='pre-line' >{ entry.description }</Typography>
        </CardContent>
        <CardActions sx={{ display:'flex',justifyContent:'end',paddingRight:2 }} >
            <Typography variant="body2" >Hace 30</Typography>
        </CardActions>
    </CardActionArea>
   </Card>
  )
}
