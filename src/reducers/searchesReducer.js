export default function searchesReducer(state, action){
    switch(action.type){
        case 'FETCH_WEATHER':
            return {...state, weather: action.payload, loading: false, suggestion: {}}
        case 'SUGGEST_ACTIVITY':
            return {...state, suggestion: action.payload, loading: false}
        case 'WEATHER_ERROR':
            return {...state, errMessages: {...state.errMessages, weatherError: action.payload.error}, loading: false, weather: {}, suggestion: {}}
        case 'SUGGESTION_ERROR':
            return {...state, suggestion: {}, errMessages: {...state.errMessages, suggestionError: action.payload.error}, loading: false}
        default:
            return state;
    }

}