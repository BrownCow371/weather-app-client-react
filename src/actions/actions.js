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
            .then(json => dispatch({type: 'FETCH_WEATHER', payload: json}))
            .catch(err => {err.json().then(message  => dispatch({type: 'ERROR_MESSAGE', payload: message}))})
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
            .then(response => response.json())
            .then(activities => dispatch({type: 'FETCH_ACTIVITIES', payload: activities}))

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
            .then(response => response.json())
            .then(conditions => dispatch({type: 'FETCH_CONDITIONS', payload: conditions}))

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
            .then(response =>response.json())
            .then(activity => dispatch({type: 'UPDATE_ACTIVITY', payload: activity}))
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
        .then(response =>response.json())
        .then(activity => dispatch({type: 'ADD_ACTIVITY', payload: activity}))
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
        .then(response =>response.json())
        .then(activity => dispatch({type: 'REMOVE_ACTIVITY', payload: activity}))
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
        .then(response => response.json())
        .then(activity => dispatch({type: 'SUGGEST_ACTIVITY', payload: activity}))
        }
}

function checkStatus(response) {
    if (response.status >= 200 && response.status <300) {
        return response.json();
    } else {
        throw response;
    }

}

