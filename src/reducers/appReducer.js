export default function appReducer(
    state = {
        loading: false,
        weather: [{dt_txt: ''}],
        user: [],
        preferences: []
    }, 
    action){

    switch(action.type){
        case 'LOADING_WEATHER':
            return {...state, loading: true}
        case 'FETCH_WEATHER':
            return {...state, weather: action.payload, loading: false}
        default:
        return state;
    }

}