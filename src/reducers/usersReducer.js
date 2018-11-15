export default function usersReducer(state,action){
    switch(action.type){
        case 'LOGGING_USER':
            return {...state, authenticating: true, errMessages: {}}
        case 'LOGIN_SUCCESS':
            return {...state, session: true, authenticating: false}
        case 'LOG_OUT':
            return {...state, session: false}
        case 'LOGIN_ERROR':
            return {...state, errMessages: {...state.errMessages, userError: action.payload.error}, loading: false}
        default:
            return state;
    }

}