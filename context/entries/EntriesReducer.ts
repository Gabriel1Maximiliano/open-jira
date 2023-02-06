import { EntriesState } from './EntriesProvider';


type EntriesTypeAtion =
|{type:'[Entries]-ActionName';}

export const entriesReducer = ( state:EntriesState,action: EntriesTypeAtion ):EntriesState => {
  switch (action.type) {
    case '[Entries]-ActionName':
        return {
            ...state,
}



    default:
        return state;
  }
}


