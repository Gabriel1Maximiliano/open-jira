import { useContext } from 'react';
import { Box, Divider, List, ListItemText, Typography } from '@mui/material';
import Drawer from "@mui/material/Drawer"
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { UIContext } from '../../context/ui/UIContext';

const menuItems :string[]=['Inbox','Starred','Send Email','Drafts'];

export const Sidebar = () => {

  const { closeSideMenu,IsSideMenuOpen } = useContext( UIContext );

  return (
 <Drawer
 anchor="left"
 open={ IsSideMenuOpen }
 onClose={ ()=>closeSideMenu() }
 >
  <Box sx={{ padding:'5px' }} >
    <Typography variant='h4'>Menu</Typography>
  </Box>
  <Box sx={ {padding:'5px 10px'} } >
    <Typography >Menú</Typography>
    <List>
      {
        menuItems.map((text,index:any)=>(
         <ListItem button key={ text } >
          <ListItemIcon>
          { (index % 2) ? (<InboxOutlinedIcon/>):(<EmailOutlinedIcon/>) }
          </ListItemIcon>
          <ListItemText  primary={text}/>
         </ListItem>
        ))
      }
    </List>
    <Divider />
    <List>
      {
        menuItems.map((text,index:any)=>(
         <ListItem button key={ text } >
          <ListItemIcon>
          { (index % 2) ? (<InboxOutlinedIcon/>):(<EmailOutlinedIcon/>) }
          </ListItemIcon>
          <ListItemText  primary={text}/>
         </ListItem>
        ))
      }
    </List>
  </Box>
    
 </Drawer>
  )
}


  
    