import {checkStatus} from './general.js';

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
      .catch(err => {err.json().then(message  => dispatch({type: 'SUGGESTION_ERROR', payload: message}))})
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