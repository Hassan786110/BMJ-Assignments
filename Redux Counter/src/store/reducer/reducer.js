import actionTypes from "../constants";

const counter_reducer = (counter = 0, action) => {
    switch (action.type) {
        case actionTypes.plus:
            return counter = ++counter;
            break;
        case actionTypes.minus:
            return counter = --counter;
            break;
        case actionTypes.reset:
            return counter = 0;
            break;
        default:
            return counter;
            break;
    }
}

export default counter_reducer;
