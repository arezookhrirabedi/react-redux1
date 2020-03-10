import { IMobAction } from "../reduxModels"
    import { reduxType } from "../reduxTypes"

const initialMobstate ={numberOfMob:100, notify:"firstAction"}

export const mobReducer = (state=initialMobstate, action:IMobAction)=>{
    switch(action.type){
        case reduxType.MOB_TYPE:  return{
                ...state,
                numberOfMob:state.numberOfMob-1
            }
            default: return state
    }

}