import { FC, useReducer } from 'react';
import { EntriesContext,entriesReducer } from './';
import { Entry } from '../../interfaces/entries';
import { v4 as uuidv4 } from 'uuid';


export interface EntriesState {
    entries:Entry [];
}

const Entries_Initial_State:EntriesState={
    entries:[
        {
            _id:uuidv4(),
            description:'pending pepe bladasdasd',
            status:'pending',
            createdAt: Date.now()
        },
        {
            _id:uuidv4(),
            description:'in-progress pepe bladasdasd',
            status:'in-progress',
            createdAt: Date.now() - 1000000
        },
        {
            _id:uuidv4(),
            description:'Lorem lola bladasdasd',
            status:'finished',
            createdAt: Date.now() - 100000
        }
    ]}

export const EntriesProvider:FC<any> =({ children }):any=>{

    const [state, dispatch] = useReducer(entriesReducer , Entries_Initial_State)

return(
 <EntriesContext.Provider value={{
    ...state, }} >
    { children }
 </EntriesContext.Provider>
)
 }