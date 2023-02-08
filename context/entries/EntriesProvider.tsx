import { FC, useEffect, useReducer } from 'react';
import { EntriesContext,entriesReducer } from './';
import { Entry } from '../../interfaces/entries';
import { v4 as uuidv4 } from 'uuid';
import entriesApi from '../../api/entriesApi';


export interface EntriesState {
    entries:Entry [];
}

const Entries_Initial_State:EntriesState={
    entries:[
       
    ]}

export const EntriesProvider:FC<any> =({ children }):any=>{

    const [state, dispatch] = useReducer(entriesReducer , Entries_Initial_State)

    const addNewEntry = ( description :string)=>{
        const newEntry :Entry= {
            _id:uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }
        dispatch({type:'[Entry]-Add-Entry',payload:newEntry})
    }

    const updateEntry =(entry:Entry)=>{
        dispatch({ type:'[Entry]-Entry-Updated',payload :entry});
    }

    const refreshEntries = async()=>{
        const { data } = await entriesApi.get<Entry[]>('/entries');
        dispatch( { type:'[Entry]-Refresh-data', payload:data } )
    }
    useEffect(() => {
     refreshEntries();
    }, [])
    

return(
 <EntriesContext.Provider value={{
    ...state,
    //Merhods
    addNewEntry,
    updateEntry
    }} >
    { children }
 </EntriesContext.Provider>
)
 }