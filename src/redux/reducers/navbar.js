import {SIDEBAR_OPEN,SIDEBAR_CLOSE,CHANGE_THEME} from '../actions/type'

const initialState={
    isSidebarOpen:false,
    isSidebarClose:false,
    isThemeChange:false
}

export const navbarReducer=(state=initialState,action)=>{
if(action.type===SIDEBAR_OPEN){
    return {...state,isSidebarOpen:true}
}
if(action.type===SIDEBAR_CLOSE){
    return{...state,isSidebarClose:true}
}
if(action.type===CHANGE_THEME){
    return {...state,isThemeChange:true}
}
else{
    return {...state}
}
   
}