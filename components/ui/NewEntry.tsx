import { Box, Button, TextField } from "@mui/material"
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';import { ChangeEvent, useState, useContext } from 'react';
import { EntriesContext } from "context/entries";
;
export const NewEntry = () => {

    const { addNewEntry } = useContext( EntriesContext )

   const [isAdding,setIsAdding] = useState( false );

   const [inputValue,setInpuntValue] = useState( '' );

   const [isTouched,setIsTouched] = useState( false );

   const onTextFieldChanges =(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setInpuntValue(e.target.value)
   }

   const onSave = ()=>{
    if( inputValue.length === 0 ) return
    
    addNewEntry(inputValue);
    setIsTouched( false );
    setIsAdding( false );
    setInpuntValue( '' );
   }

  return (



    <Box sx={{marginBottom:2,padding:1}} >

        {
            isAdding ?<><TextField 
            fullWidth 
            sx={{ 
                marginTop:2,
                 marginBottom:1
                }}
                autoFocus
                multiline
                label='Nueva entrada'
                helperText={ (inputValue.length) <= 0 && isTouched && 'Ingrese un valor' }
                error={ (inputValue.length) <= 0 && isTouched }
                value={ inputValue }
                onChange={ onTextFieldChanges }
                onBlur={()=>setIsTouched( true )}
                />
           <Box display='flex' justifyContent='space-between' >
           
            <Button 
            variant="outlined"
            color="secondary"
            endIcon={ <SaveOutlinedIcon />}
            onClick={ onSave }
             >Guardar</Button>
           
            <Button 
            variant="text"
            onClick={()=>setIsAdding(false)}
             >Cancelar</Button>
            </Box></>:<> <Button
    startIcon={ <AddCircleOutlineOutlinedIcon/> }
    fullWidth
    variant="outlined"
    onClick={()=>setIsAdding(true)}
    >
        Agregar tarea
    </Button></>
        }
   

     </Box>
   
  )
}


   