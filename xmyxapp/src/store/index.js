import { createStore, combineReducers } from "redux"
import navbarReducer from "./Reducers/navbarReducer"
const reducer = combineReducers({
    navbarReducer
})
const store = createStore(reducer);
export default store;