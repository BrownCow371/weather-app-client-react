import {checkStatus} from './general.js'
import {reqHeaders} from './headers.js'

export function fetchActivities() {
    return (dispatch) => {
       dispatch({type: 'LOADING_DATA'});
       return fetch('/api/activities', {
            headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
        .then(checkStatus)
        .then(activities => dispatch({type: 'FETCH_ACTIVITIES', payload: activities}))
        .catch(err => {err.json().then(message  => dispatch({type: 'ACTIVITY_ERROR', payload: message}))})
    }
}

export function updateActivity(requestData){
    return (dispatch) => {
        dispatch({type: 'LOADING_DATA'});
       
        return fetch(`/api/activities/${requestData.activity.id}`, {
            method: "PUT",
            headers: reqHeaders,
            body: JSON.stringify(requestData),
        })
        .then(checkStatus)
        .then(activity => dispatch({type: 'UPDATE_ACTIVITY', payload: activity}))
        .catch(err => {err.json().then(message  => dispatch({type: 'ACTIVITY_ERROR', payload: message}))})
    }
}

export function addActivity(requestData){
    return (dispatch) => {
        dispatch({type: 'LOADING_DATA'});

        return fetch('/api/activities', {
            method: "POST",
            headers: reqHeaders,
            body: JSON.stringify(requestData),
        })
        .then(checkStatus)
        .then(activity => dispatch({type: 'ADD_ACTIVITY', payload: activity}))
        .catch(err => {err.json().then(message  => dispatch({type: 'ACTIVITY_ERROR', payload: message}))})
    }
}

export function removeActivity(id){
    return (dispatch) => {
        dispatch({type: 'LOADING_DATA'});
  
        return fetch(`/api/activities/${id}`, {
            method: "DELETE",
            headers: reqHeaders
        })
        .then(checkStatus)
        .then(activity => dispatch({type: 'REMOVE_ACTIVITY', payload: activity}))
        .catch(err => {err.json().then(message  => dispatch({type: 'ACTIVITY_ERROR', payload: message}))})
    }
}

