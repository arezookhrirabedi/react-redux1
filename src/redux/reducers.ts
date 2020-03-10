import { combineReducers} from "redux"
import {mobReducer} from "./mob/mobReducer"

export const reducers = combineReducers({
    mobReducer:mobReducer
})