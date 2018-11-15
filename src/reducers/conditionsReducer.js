export default function conditionsReducer(state, action){
    switch(action.type){
        case 'FETCH_CONDITIONS':
            return {...state, conditions: action.payload, loading: false}
        case 'CONDITION_ERROR':
            return {...state, errMessages: {...state.errMessages, conditionError: action.payload.error}, loading: false}
        default:
            return state;
    }

}