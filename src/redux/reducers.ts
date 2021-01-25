import { combineReducers, ReducersMapObject} from "redux"
import {mobReducer} from "./mob/mobReducer"
import { Reducer,AnyAction } from "redux"
import { IMobState ,IStore} from "./reduxModels"



 
const reducers: ReducersMapObject<IStore, AnyAction> = { 

    mobReducer:mobReducer as Reducer<IMobState,AnyAction>
  
    }
  
  export const rootreducer = combineReducers(
      reducers
  
  )