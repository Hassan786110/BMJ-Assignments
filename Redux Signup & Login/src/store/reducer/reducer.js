import actionTypes from "../constants";

const signupState = [];
const loginState = {};

const signupReducer = (state = signupState, action) => {
    switch (action.type) {
        case actionTypes.signup:
            return ([...state, {
                    userName: action.payload.name,
                    userPhone: action.payload.phone,
                    userEmail: action.payload.email,
                    userPassword: action.payload.password,
                }]);
            break;
        default:
            return state;
            break;
    }
}

const loginReducer = (state = loginState, action) => {
    switch (action.type) {
        case actionTypes.login:
            return {
                userEmail: action.payload.email,
                userPassword: action.payload.password,
            }
            break;
        default:
            return state;
            break;
    }
}

export { signupReducer, loginReducer };