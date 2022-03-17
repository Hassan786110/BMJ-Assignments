import actionTypes from "../constants";

const userSignup = (value) => {
    return((dispatch)=>{
        dispatch({
            type: actionTypes.signup,
            payload: value,
        })
    })
}

const userLogin = (value) => {
    return((dispatch)=>{
        dispatch({
            type: actionTypes.login,
            payload: value,
        })
    })
}

export { userSignup, userLogin };