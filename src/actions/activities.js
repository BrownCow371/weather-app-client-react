import {checkStatus} from './general.js'

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
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                
                },
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

        return fetch(`/api/activities`, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
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
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
        })
        .then(checkStatus)
        .then(activity => dispatch({type: 'REMOVE_ACTIVITY', payload: activity}))
        .catch(err => {err.json().then(message  => dispatch({type: 'ACTIVITY_ERROR', payload: message}))})
    }
}

