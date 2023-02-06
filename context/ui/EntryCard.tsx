import { Card, CardActionArea, CardActions, CardContent } from "@mui/material"
import Typography from "@mui/material/Typography"
import { FC } from "react";
import { Entry } from '../../interfaces/entries';

interface Props {
    entry:Entry;
}
export const EntryCard:FC<Props> = ({ entry }) => {
  return (
   <Card 
   sx={{marginBotton:1}}
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
