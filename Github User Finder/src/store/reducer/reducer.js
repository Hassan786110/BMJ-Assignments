import actionTypes from "../constant";

const INITIAL_STATE = {
    User: {},
    Loader: false,
    Error: false,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.Loader:
            return {
                ...state,
                Loader: true,
            };
            break;
        case actionTypes.Find:
            return {
                ...state,
                Error: false,
                User: action.payload,
                Loader: false,
            }
            break;
        case actionTypes.Error:
            return {
                ...state,
                Error: true,
                Loader: false,
            }
            break;
        default:
            return state;
            break;
    }
}

export default reducer;