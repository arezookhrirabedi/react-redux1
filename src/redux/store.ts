import {createStore} from "redux";
import { rootreducer} from "./reducers";

export const store = createStore(rootreducer)