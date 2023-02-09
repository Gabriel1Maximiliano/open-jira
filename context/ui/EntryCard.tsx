import { Card, CardActionArea, CardActions, CardContent } from "@mui/material"
import Typography from "@mui/material/Typography"
import { useRouter } from "next/router";
import { DragEvent, FC, useContext } from 'react';
import { getFormatDistanceToNow } from "utils/dateFunctions";
import { Entry } from '../../interfaces/entries';
import { UIContext } from './UIContext';

interface Props {
    entry:Entry;
}
export const EntryCard:FC<Props> = ({ entry }) => {

    const router = useRouter();

    const { endDragging,startDragging }= useContext( UIContext );

    const onDragStart =(e:DragEvent)=>{
        
        e.dataTransfer.setData('text',entry._id);
        startDragging();
    }

    const onDragEnd =(e: any)=>{
        const id = e.dataTransfer.getData('text');
        endDragging();
    }

   const onClick = ()=>{
  router.push(`/entries/${ entry._id }`)
   }

  return (
   <Card 
   onClick={ onClick }
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
            <Typography variant="body2" >{ getFormatDistanceToNow( entry.createdAt ) }</Typography>
        </CardActions>
    </CardActionArea>
   </Card>
  )
}
