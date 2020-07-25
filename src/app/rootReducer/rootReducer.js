import { combineReducers } from "redux";
import createReducer from "../../features/TestArea/TestReducer"

const rootReducer= combineReducers({
    test:createReducer
})

export default rootReducer;