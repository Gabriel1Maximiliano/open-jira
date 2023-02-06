import { UIState } from './UIProvider';

type UITypeAtion =
|{type:'[UI]-Open-Sidebar';}
|{type:'[UI]-Close-Sidebar';}

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



    default:
        return state;
  }
}


