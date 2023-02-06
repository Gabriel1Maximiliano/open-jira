import { FC, useReducer } from 'react';
import { EntriesContext,entriesReducer } from './';


export interface EntriesState {
    entries:[];
}

const Entries_Initial_State:EntriesState={
    entries:[]}

export const EntriesProvider:FC =({ children }:any):any=>{

    const [state, dispatch] = useReducer(entriesReducer , Entries_Initial_State)

return(
 <EntriesContext.Provider value={{
    entries:[] }} >
    { children }
 </EntriesContext.Provider>
)
 }