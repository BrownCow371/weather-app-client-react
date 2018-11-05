
export default function appReducer(
    state = {
        loading: false,
        weather: {},
        conditions: [],
        activities: [],
        errMessage: '',
        suggestion: {}
       }, 
    action){

    switch(action.type){
        case 'LOADING_DATA':
            return {...state, loading: true, errMessage: ''}
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
        case 'ERROR_MESSAGE':
                console.log("error", action.payload)
                return {...state, loading: false, errMessage: action.payload.error}
        default:
            return state;
    }

}