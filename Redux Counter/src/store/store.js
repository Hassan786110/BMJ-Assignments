import root_reducer from "./reducer/root_reducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const store = createStore(root_reducer, {}, applyMiddleware(thunk));

export default store;