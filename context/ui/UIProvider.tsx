import { FC, useReducer } from 'react';
import { UIContext,uiReducer } from './';


export interface UIState {
    sideMenuOpen:boolean;
   
}

const UI_Initial_State:UIState={
    sideMenuOpen:false,

}

export const UIProvider:FC<any> =({ children }):any=>{

    const [state, dispatch] = useReducer(uiReducer , UI_Initial_State);

    const openSideMenu = () => {
        console.log('hola')
        dispatch({type:'[UI]-Open-Sidebar'})
    }
    const closeSideMenu = ()=>{
        dispatch({type:'[UI]-Close-Sidebar'})
    }

return(
 <UIContext.Provider value={{
    //states
    IsSideMenuOpen:state.sideMenuOpen,

    //methods
    openSideMenu,
    closeSideMenu
 }} >
    { children }
 </UIContext.Provider>
)
 }

