import { createStore } from "redux"
import {devToolsEnhancer} from 'redux-devtools-extension'
import rootReducer from "../rootReducer/rootReducer";

export const configureStore=()=>{
    const store= createStore(rootReducer,devToolsEnhancer());
    console.log(store);
    return store;
}