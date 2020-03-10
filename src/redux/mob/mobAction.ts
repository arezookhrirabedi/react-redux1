import {reduxType} from "../reduxTypes"

export const mobAction = ()=>{
    return{
        type: reduxType.MOB_TYPE,
        info: 'first action'
    }
} 