import { combineReducers, legacy_createStore } from "redux";
import sideMenuReducers from "./sideMenuReducers";

let redusers = combineReducers({
    sideMenu: sideMenuReducers
});

let store = legacy_createStore(redusers)

export default store;