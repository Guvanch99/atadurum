import {SIDEBAR_CLOSE,SIDEBAR_OPEN,CHANGE_THEME} from './type'

export const openSidebar=()=>{
    return {type:SIDEBAR_OPEN}
    
}
export const closeSidebar=()=>{
     return {type:SIDEBAR_CLOSE}
}
export const changeTheme=()=>{
    return {type:CHANGE_THEME}
}