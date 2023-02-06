import List from "@mui/material/List"
import Paper from "@mui/material/Paper"
import { EntriesContext } from "context/entries"
import { EntryStatus } from "interfaces"
import { FC, useContext, useMemo } from "react"
import { EntryCard } from "./EntryCard"

interface Props {
    status:EntryStatus
}

export const EntryList:FC<Props> = ({status}) => {

    const { entries }=useContext( EntriesContext );

    const entriesByStatus = useMemo(()=> entries.filter(entry=> entry.status === status),[entries]);

    entries.filter(entry=> entry.status === status)
  return (
   <div>
    <Paper sx={{ height:'calc(100%vh - 250px)', overflow:"scroll-hidden",backgroundColor:'transparent', padding:'10px 5px' }}  >
        {/* todo: cambiara depende si hago drag o no */}
        <List sx={{ opacity:1 }} >
            {
                entriesByStatus.map( entry=>( <EntryCard key={entry._id} entry={ entry }/>) )
            }
        </List>
    </Paper>
   </div>
  )
}
