import { createContext } from 'react';


export interface ContextProps{
IsSideMenuOpen: boolean;
IsSideMenuClose:boolean;
isAddingEntry:boolean;
isDragging:boolean;
//methods
openSideMenu: () => void
closeSideMenu: () => void
setIsAddingEntry: (isAdding: boolean) => void
startDragging:() => void
endDragging:() => void

}


export const UIContext = createContext({} as ContextProps);