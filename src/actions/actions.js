export function fetchWeather(zip) {
    return (dispatch) => {
        dispatch({type: 'LOADING_DATA'});
        return fetch(`/api/weather/${zip}`, {
            headers:{
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          })
            .then(checkStatus)
            .then(weather => dispatch({type: 'FETCH_WEATHER', payload: weather}))
            .catch(err => {err.json().then(message  => dispatch({type: 'WEATHER_ERROR', payload: message}))})
    }
}
//   Future Functionality
// export function fetchForecast(zip) {
//     return (dispatch) => {
//         dispatch({type: 'LOADING_DATA'});
//         return fetch(`/api/forecast/${zip}`, {
//             headers:{
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//                 }
//             })
//             .then(response => response.json())
//             .then(forecast => dispatch({type: 'FETCH_FORECAST', payload: forecast.list}))
//     }
// }

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

// export function fetchActivity(id) {
//     return (dispatch) => {
//        dispatch({type: 'LOADING_DATA'});
//        return fetch(`/api/activities/${id}`, {
//             headers:{
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//             }
//         })
//             .then(response => response.json())
//             .then(activity => dispatch({type: 'FETCH_ACTIVITY', payload: activity}))

//     }
// }

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

export function updateActivity(requestData){
    return (dispatch) => {
        dispatch({type: 'LOADING_DATA'});

        requestData.activity.condition_ids = requestData.activity.conditions.map(c => c.id);

        return fetch(`/api/activities/${requestData.activity.id}`, {
            method: "PUT",
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
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

        requestData.activity.condition_ids = requestData.activity.conditions.map(c => c.id);
        
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

export function fetchSuggestion(zip){
    return(dispatch) => {
        dispatch({type: 'LOADING_DATA'});
        return fetch(`api/weather/${zip}/suggestion`, {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
        })
        .then(checkStatus)
        .then(activity => dispatch({type: 'SUGGEST_ACTIVITY', payload: activity}))
        .catch(err => {err.json().then(message  => dispatch({type: 'WEATHER_ERROR', payload: message}))})
    }
}

function checkStatus(response) {
    if (response.status >= 200 && response.status <300) {
        return response.json();
    } else {
        throw response;
    }
}

