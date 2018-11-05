
export default function appReducer(
    state = {
        loading: false,
        weather: {},
        conditions: [],
        activities: [],
        errMessages: {},
        suggestion: {}
       }, 
    action){

    switch(action.type){
        case 'LOADING_DATA':
            return {...state, loading: true, errMessages: {}}
        case 'FETCH_WEATHER':
            return {...state, weather: action.payload, loading: false, suggestion: {}}
        // case 'FETCH_FORECAST':
        //     return {...state, forecast: action.payload, loading:false}
        case 'FETCH_ACTIVITIES':
            return {...state, activities: action.payload, loading: false}
        case 'FETCH_CONDITIONS':
            return {...state, conditions: action.payload, loading: false}
        case 'UPDATE_ACTIVITY':
            return {...state, activities: state.activities.map(act => 
                (act.id === action.payload.id ? action.payload : act)), loading: false }
        case 'ADD_ACTIVITY':
            return {...state, activities: [...state.activities, action.payload], loading: false }
        case 'REMOVE_ACTIVITY':
            return {...state, activities: state.activities.filter(act => act.id !== action.payload.id), loading: false }
        case 'SUGGEST_ACTIVITY':
            return {...state, suggestion: action.payload, loading: false}
        case 'WEATHER_ERROR':
            return {...state, errMessages: {...state.errMessages, weatherError: action.payload.error}, loading: false, weather: {}, suggestion: {}}
        case 'ACTIVITY_ERROR':
            return {...state, errMessages: {...state.errMessages, activityError: action.payload.error}, loading: false}
        case 'CONDITION_ERROR':
            return {...state, errMessages: {...state.errMessages, conditionError: action.payload.error}, loading: false}
        case 'SUGGESTION_ERROR':
            return {...state, suggestion: {}, errMessages: {...state.errMessages, suggestionError: action.payload.error}, loading: false}
        default:
            return state;
    }

}