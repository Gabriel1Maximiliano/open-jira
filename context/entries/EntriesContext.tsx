import { createContext } from 'react';
import { Entry } from '../../interfaces/entries';


export interface ContextProps{
entries:Entry[] ;

//Methods
addNewEntry: (description: string) => void;
updateEntry:( entry:Entry, showSnackBar?:boolean )=>void

}


export const EntriesContext = createContext({} as ContextProps);