import { EntriesState } from './EntriesProvider';
import { Entry } from '../../interfaces/entries';


type EntriesTypeAtion =
|{type:'[Entry]-Add-Entry',payload:Entry;}

export const entriesReducer = ( state:EntriesState,action: EntriesTypeAtion ):EntriesState => {
  switch (action.type) {
    case '[Entry]-Add-Entry':
        return {
            ...state,
            entries:[...state.entries,action.payload]
}



    default:
        return state;
  }
}


