import {checkStatus} from './general.js'

export function loginUser(auth){
    return(dispatch) => {
    dispatch({type: 'LOGGING_IN_USER'});

    return fetch('api/user_token', {
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
        body: JSON.stringify(auth)
    })
    .then(checkStatus)
    .then(result => dispatch({type: 'LOGIN_USER', payload: result.jwt}))
    .catch(err => {err.json().then(message  => dispatch({type: 'LOGIN_ERROR', payload: message}))})

    }
}