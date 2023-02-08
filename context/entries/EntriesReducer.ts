import { EntriesState } from './EntriesProvider';
import { Entry } from '../../interfaces/entries';


type EntriesTypeAtion =
|{type:'[Entry]-Add-Entry',payload:Entry;}
|{type:'[Entry]-Entry-Updated',payload:Entry;}
|{type:'[Entry]-Refresh-data',payload:Entry[];}

export const entriesReducer = ( state:EntriesState,action: EntriesTypeAtion ):EntriesState => {
  switch (action.type) {
    case '[Entry]-Add-Entry':
        return {
            ...state,
            entries:[...state.entries,action.payload]
}
  case '[Entry]-Entry-Updated':
      return {
          ...state,
          entries:state.entries.map(entry=>{
            if( entry._id === action.payload._id ){
              entry.status = action.payload.status;
              entry.description = action.payload.description;
            }
            return entry
          })
}
case '[Entry]-Refresh-data':
  return {
      ...state,
      entries:[...action.payload]
}




    default:
        return state;
  }
}


