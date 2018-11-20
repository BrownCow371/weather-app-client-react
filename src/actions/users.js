import {checkStatus} from './general.js'

export function loginUser(auth){
    return (dispatch) => {
    dispatch({type: 'LOGGING_USER'});

    return fetch('/api/login', {
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
        sessionStorage.setItem("user", result.user);
        dispatch({type: 'LOGIN_SUCCESS'})
    })
    .catch(err => {err.json().then(message  => dispatch({type: 'LOGIN_ERROR', payload: message}))})

    }
}

export function createUser(auth){
    return (dispatch) => {
    dispatch({type: 'LOGGING_USER'});

    return fetch('/api/users', {
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
        sessionStorage.setItem("user", result.user);
        dispatch({type: 'LOGIN_SUCCESS'})
    })
    .catch(err => {err.json().then(message  => dispatch({type: 'USER_ERROR', payload: message}))})

    }
}

export function logOutUser(){
    sessionStorage.clear();
    // need to force window reload in order for sessions to actually be cleared from browser
    window.location.reload();
    return {type: 'LOG_OUT'};
}