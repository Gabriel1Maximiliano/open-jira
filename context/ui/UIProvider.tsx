import { FC, useReducer } from 'react';
import { UIContext,uiReducer } from './';


export interface UIState {
    IsSideMenuOpen:boolean;
    IsSideMenuClose:boolean;
    isAddingEntry:boolean;
    isDragging:boolean;
}

const UI_Initial_State:UIState={
    IsSideMenuOpen:false,
    IsSideMenuClose:false,
    isAddingEntry:false,
    isDragging:false

}

export const UIProvider:FC<any> =({ children }):any=>{

    const [state, dispatch] = useReducer(uiReducer , UI_Initial_State);

    const openSideMenu = () => {
        
        dispatch({type:'[UI]-Open-Sidebar'});
    }
    const closeSideMenu = ()=>{
        dispatch({type:'[UI]-Close-Sidebar'});
    }
    const setIsAddingEntry =(isAdding:boolean)=>{
        dispatch( {type:'[UI]-Set-isAddingEntry',payload:isAdding} );
    }
    const startDragging=()=>{
        dispatch( {type:'[UI]-Start-Dragging'} );

    }
    const endDragging=()=>{
        dispatch( {type:'[UI]-End-Dragging'} );

    }

return(
 <UIContext.Provider value={{
    ...state,
    //methods
    openSideMenu,
    closeSideMenu,
    setIsAddingEntry,

    startDragging,
    endDragging
 }} >
    { children }
 </UIContext.Provider>
)
 }

