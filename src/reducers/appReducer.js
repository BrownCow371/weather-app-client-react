// import {defaultWeatherState} from './defaultState.js'
// import {defaultForecastState} from './defaultState.js'

export default function appReducer(
    state = {
        loading: false,
        weather: [],
        forecast: [],
        activities: [],
        activity: {}
       }, 
    action){

    switch(action.type){
        case 'LOADING_DATA':
            return {...state, loading: true}
        case 'FETCH_WEATHER':
            return {...state, weather: [action.payload], loading: false}
        case 'FETCH_FORECAST':
            return {...state, forecast: action.payload, loading:false}
        case 'FETCH_ACTIVITIES':
            return {...state, activities: action.payload, loading: false}
        case 'FETCH_ACTIVITY':
            return {...state, activity: action.payload, loading: false}
        default:
        return state;
    }

}