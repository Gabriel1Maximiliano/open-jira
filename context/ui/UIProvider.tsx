import { FC, useReducer } from 'react';
import { UIContext,uiReducer } from './';


export interface UIState {
    IsSideMenuOpen:boolean;
    IsSideMenuClose:boolean,
}

const UI_Initial_State:UIState={
    IsSideMenuOpen:false,
    IsSideMenuClose:false,

}

export const UIProvider:FC<any> =({ children }):any=>{

    const [state, dispatch] = useReducer(uiReducer , UI_Initial_State);

    const openSideMenu = () => {
        
        dispatch({type:'[UI]-Open-Sidebar'})
    }
    const closeSideMenu = ()=>{
        dispatch({type:'[UI]-Close-Sidebar'})
    }

return(
 <UIContext.Provider value={{
    //states
    IsSideMenuOpen:state.IsSideMenuOpen,
    IsSideMenuClose:state. IsSideMenuClose,
    //methods
    openSideMenu,
    closeSideMenu
 }} >
    { children }
 </UIContext.Provider>
)
 }

