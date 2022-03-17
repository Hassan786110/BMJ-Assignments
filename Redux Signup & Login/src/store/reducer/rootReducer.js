import { combineReducers } from "redux";
import { signupReducer, loginReducer } from "./reducer";

const rootReducer = combineReducers({
    signupReducer,
    loginReducer
});

export default rootReducer;