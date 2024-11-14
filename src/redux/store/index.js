import {legacy_createStore } from "redux";
import reducer from "../reducer";

var store = legacy_createStore(reducer);

export default store;