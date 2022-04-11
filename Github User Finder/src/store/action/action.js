import axios from "axios";
import actionTypes from "../constant";

const Find = (username) => {
    return ((dispatch) => {
        dispatch({
            type: actionTypes.Loader,
        })
        const input = username.user != "" ? username.user : "example";
        axios.get(`https://api.github.com/users/${input}`)
            .then((response) => {
                dispatch({
                    type: actionTypes.Find,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: actionTypes.Error,
                })
            })
    })
}

export default Find;