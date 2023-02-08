import { FC, useEffect, useReducer } from 'react';
import { EntriesContext,entriesReducer } from './';
import { Entry } from '../../interfaces/entries';

import entriesApi from '../../api/entriesApi';


export interface EntriesState {
    entries:Entry [];
}

const Entries_Initial_State:EntriesState={
    entries:[
       
    ]}

export const EntriesProvider:FC<any> =({ children }):any=>{

    const [state, dispatch] = useReducer(entriesReducer , Entries_Initial_State)

    const addNewEntry = async( description :string)=>{

        try{

            const { data } = await entriesApi.post<Entry>('/entries',{description});
            
            dispatch({type:'[Entry]-Add-Entry',payload:data});

        }catch(error){
            console.log(error);
        }
        
    }

    const updateEntry =async({ _id,description,status }:Entry)=>{

        try {

            const { data } = await entriesApi.put<Entry>(`/entries/${ _id }`, { description, status, } );
            
            dispatch({ type:'[Entry]-Entry-Updated',payload :data});
            
        } catch (error) {
            console.log(error);
        }

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