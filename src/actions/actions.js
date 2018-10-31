export function fetchWeather(zip) {
    return (dispatch) => {
        dispatch({type: 'LOADING_DATA'});
        return fetch(`/api/weather/${zip}`, {
            headers:{
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          })
            .then(response => response.json())
            .then(weather => dispatch({type: 'FETCH_WEATHER', payload: weather}))
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

export function fetchActivity(id) {
    return (dispatch) => {
       dispatch({type: 'LOADING_DATA'});
       return fetch(`/api/activities/${id}`, {
            headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(activity => dispatch({type: 'FETCH_ACTIVITY', payload: activity}))

    }
}

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