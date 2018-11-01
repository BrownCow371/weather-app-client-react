// import {defaultWeatherState} from './defaultState.js'
// import {defaultForecastState} from './defaultState.js'

export default function appReducer(
    state = {
        loading: false,
        weather: [],
        conditions: [],
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
        case 'FETCH_CONDITIONS':
            return {...state, conditions: action.payload, loading: false}
        case 'UPDATE_ACTIVITY':
            return {...state, activities: state.activities.map(act => (
                act.id === action.payload.id ? action.payload : act)) }
        default:
        return state;
    }

}