import {checkStatus} from './general.js'

export function fetchConditions() {
    return (dispatch) => {
       dispatch({type: 'LOADING_DATA'});
       return fetch('/api/conditions/', {
            headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
        .then(checkStatus)
        .then(conditions => dispatch({type: 'FETCH_CONDITIONS', payload: conditions}))
        .catch(err => {err.json().then(message  => dispatch({type: 'CONDITION_ERROR', payload: message}))})
    }
}