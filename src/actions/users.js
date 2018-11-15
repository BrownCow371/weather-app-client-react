import {checkStatus} from './general.js'

export function loginUser(auth){
    return (dispatch) => {
    dispatch({type: 'LOGGING_USER'});

    return fetch('api/login', {
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
        body: JSON.stringify(auth)
    })
    .then(checkStatus)
    .then(result => {
        sessionStorage.setItem("jwt", result.jwt);
        dispatch({type: 'LOGIN_SUCCESS'})
    })
    .catch(err => {err.json().then(message  => dispatch({type: 'LOGIN_ERROR', payload: message}))})

    }
}

export function logOutUser(){
    sessionStorage.removeItem("jwt");
    return {type: 'LOG_OUT'};
}