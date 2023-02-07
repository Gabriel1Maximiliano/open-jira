import { UIState } from './UIProvider';

type UITypeAtion =
|{type:'[UI]-Open-Sidebar'}
|{type:'[UI]-Close-Sidebar'}
|{type:'[UI]-Set-isAddingEntry',payload:boolean}
|{type:'[UI]-Start-Dragging'}
|{type:'[UI]-End-Dragging'}

export const uiReducer = ( state:UIState,action: UITypeAtion ):UIState => {
  switch (action.type) {
    case '[UI]-Open-Sidebar':
        return {
            ...state,
            IsSideMenuOpen:true
}
case '[UI]-Close-Sidebar':
        return {
            ...state,
            IsSideMenuOpen:false
}
case '[UI]-Set-isAddingEntry':
        return {
            ...state,
           isAddingEntry:!state.isAddingEntry
}
case '[UI]-Start-Dragging':
        return {
            ...state,
           isDragging:true
}
case '[UI]-End-Dragging':
        return {
            ...state,
           isDragging:false
}



    default:
        return state;
  }
}


