import {defaultWeatherState} from './defaultState.js'
import {defaultForecastState} from './defaultState.js'

export default function appReducer(
    state = {
        loading: false,
        weather: [],
        forecast: [],
        user: [],
        preferences: []
    }, 
    action){

    switch(action.type){
        case 'LOADING_WEATHER':
            return {...state, loading: true}
        case 'FETCH_WEATHER':
            return {...state, weather: [action.payload], loading: false}
        case 'FETCH_FORECAST':
            return {...state, forecast: action.payload, loading:false}
        default:
        return state;
    }

}