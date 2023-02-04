
import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';


export const darkTheme = createTheme({
  palette: {
    mode:'dark',
   
    primary:{
     main:'#4a148c',
    },
    secondary:{
     main:'#19857b',
    },
    error:{
     main:red.A400,
    },
    
   },
   components:{
     
   }
});