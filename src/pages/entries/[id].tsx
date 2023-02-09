import { GetServerSideProps } from 'next';
import { capitalize,Button, Card, CardActions, CardContent, CardHeader, FormControl, FormLabel, Grid, RadioGroup, TextField, IconButton } from '@mui/material'
import { Layout } from 'components'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { EntryStatus, Entry } from '../../../interfaces/entries';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ChangeEvent, useState, useMemo, useContext } from 'react';

import { dbEntries } from 'database';
import { EntriesContext } from '../../../context/entries/EntriesContext';
import { getFormatDistanceToNow } from 'utils/dateFunctions';



const validStatus :EntryStatus[] = ['pending','in-progress','finished'];

interface Props {
    entry:Entry

}

const EntryPage = ( props:Props ) => {

    const { updateEntry } = useContext( EntriesContext )

    const [inputValue, setInputValue] = useState( props.entry.description );
    const [status, setStatus] = useState<EntryStatus>( props.entry.status );
    const [touched, setTouched] = useState( false );
    
    const isNotValue =  useMemo(()=> inputValue.length <= 0 && touched,[inputValue,touched])

    const onInputValueChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.target.value);
    }
    const onStatusChange = (e:ChangeEvent<HTMLInputElement>) =>{

        setStatus(e.target.value as EntryStatus);
    }
    const onClickSave = ()=>{
        if( inputValue.trim().length === 0 ) return;

        const UpdatedEntry:Entry ={
           ...props.entry,
           status,
           description: inputValue
        }
        updateEntry( UpdatedEntry, true )
    }
  return (
    <Layout title={ inputValue.substring(0,12) + '...' } >
        <Grid
        container
        justifyContent='center'
        sx={{ marginTop: 2, }}

        >
        <Grid item xs={ 12 } sm={ 8 } md={ 6 }  >
            <Card>
                <CardHeader
                title={`Entrada:`}
                subheader={`Creada: ${ getFormatDistanceToNow(props.entry.createdAt) }`}
                
               />
               <FormControl>
                <FormLabel>Status</FormLabel>
               </FormControl>
                   {/* RADIO */}
                <CardContent>

                        <TextField
                        sx={{ marginTop: 2, marginBottom:1 }}
                        fullWidth
                        placeholder='Nueva entrada'
                        multiline
                        label='Nueva entrada'
                        value={ inputValue }
                        onBlur={ ()=> setTouched( true ) }
                        onChange={ onInputValueChange }
                        helperText={ isNotValue && 'Ingrese un valor'}
                        error={ inputValue.length <= 0 && touched }
                        />
                         <FormControl>
                <FormLabel color="success" >Status</FormLabel>
                <RadioGroup 
                row
                value={ status }
                onChange={ onStatusChange }
                >
                    {

                validStatus.map(( status )=>(
                    <FormControlLabel 
                    key={ status }
                    value={ status }
                    control={ <Radio  color="success"/> }
                    label={ capitalize(status) }
                    />
                ))

                    }
                </RadioGroup>
               </FormControl>
                        <CardActions>
                        <Button
                        startIcon={ <SaveOutlinedIcon /> }
                        variant='contained'
                        fullWidth
                        color="success"
                        onClick={ onClickSave }
                        disabled= { inputValue.length <= 0  }
                        >
                            Save
                        </Button>
                    </CardActions>
                    </CardContent>
                
                </Card>
            </Grid>

        </Grid>
        <IconButton sx={{position:'fixed',
        bottom:30,
        right:30,
        backgroundColor:'red'

    }} >
            <DeleteOutlineOutlinedIcon/>
        </IconButton>
    </Layout>
  )
}

 export const getServerSideProps :GetServerSideProps = async ( ctx )=>{
 
   const id  = ctx.params as { id:any }
 
   const entry =  await dbEntries.getEntryById(id)

  if( !entry ){

    return {
        redirect:{
            destination:'/',
            permanent:false
        }
    }

  }
    return { props: { entry } }
 }

export default EntryPage