export function fetchWeather(zip) {
    // will need a n argument in future to grab zip code and preferences
    return (dispatch) => {
        dispatch({type: 'LOADING_DATA'});
        // look into how to pass multiple search params other than zip, like units
        return fetch(`/api/weather/${zip}`)
            .then(response => response.json())
            .then(weather => dispatch({type: 'FETCH_WEATHER', payload: weather}))
    }
}

export function fetchForecast(zip) {
    // will need a n argument in future to grab zip code and preferences
    return (dispatch) => {
        dispatch({type: 'LOADING_DATA'});
        // look into how to pass multiple search params other than zip, like units
        return fetch(`/api/forecast/${zip}`)
            .then(response => response.json())
            .then(forecast => dispatch({type: 'FETCH_FORECAST', payload: forecast.list}))
    }
}

export function fetchActivities() {
    return (dispatch) => {
       dispatch({type: 'LOADING_DATA'});
       return fetch('/api/activities')
            .then(response => response.json())
            .then(activities => dispatch({type: 'FETCH_ACTIVITIES', payload: activities}))

    }
}

export function fetchActivity(id) {
    return (dispatch) => {
       dispatch({type: 'LOADING_DATA'});
       return fetch(`/api/activities/${id}`)
            .then(response => response.json())
            .then(activity => dispatch({type: 'FETCH_ACTIVITY', payload: activity}))

    }
}