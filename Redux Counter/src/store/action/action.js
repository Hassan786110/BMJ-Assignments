import actionTypes from "../constants"

const counter_plus = (value) => {
    return ((dispatch) => {
        dispatch({
            type: actionTypes.plus,
            payload: value,
        })
    })
}

const counter_minus = (value) => {
    return ((dispatch) => {
        dispatch({
            type: actionTypes.minus,
            payload: value,
        })
    })
}

const counter_reset = (value) => {
    return ((dispatch) => {
        dispatch({
            type: actionTypes.reset,
            payload: value,
        })
    })
}

export { counter_plus, counter_minus, counter_reset };