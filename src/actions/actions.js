export function fetchWeather() {
    // will need a n argument in future to grab zip code and preferences
    return (dispatch) => {
        dispatch({type: 'LOADING_WEATHER'});
        // look into how to pass multiple search params other than zip, like units
    return fetch('/api/weather')
        .then(response => response.json())
        .then(weather => dispatch({type: 'FETCH_WEATHER', payload: weather}))
    }
}

export function fetchForecast() {
    // will need a n argument in future to grab zip code and preferences
    return (dispatch) => {
        dispatch({type: 'LOADING_WEATHER'});
        // look into how to pass multiple search params other than zip, like units
    return fetch('/api/forecast')
        .then(response => response.json())
        .then(forecast => dispatch({type: 'FETCH_FORECAST', payload: forecast.list}))
    }
}