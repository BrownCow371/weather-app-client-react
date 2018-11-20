export default function activitiesReducer(state, action){
    switch(action.type){
        case 'FETCH_ACTIVITIES':
            return {...state, activities: action.payload, loading: false}
        case 'UPDATE_ACTIVITY':
            return {...state, activities: state.activities.map(act => 
                (act.id === action.payload.id ? action.payload : act)), loading: false}
        case 'ADD_ACTIVITY':
            return {...state, activities: [...state.activities, action.payload], loading: false}
        case 'REMOVE_ACTIVITY':
            return {...state, activities: state.activities.filter(act => act.id !== action.payload.id), loading: false}
        case 'ACTIVITY_ERROR':
            return {...state, errMessages: {...state.errMessages, activityError: action.payload.error}, loading: false}
        default:
            return state;
    }

}