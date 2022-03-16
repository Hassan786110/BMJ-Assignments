import { combineReducers } from "redux";
import counter_reducer from "./reducer";

const root_reducer = combineReducers({
    reducer: counter_reducer,
})

export default root_reducer;
