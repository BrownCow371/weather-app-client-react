export default function usersReducer(state,action){
    switch(action.type){
        case 'LOGGING_USER':
            return {...state, loading: true, errMessages: {}}
        case 'LOGIN_SUCCESS':
            return {...state, session: !!sessionStorage.jwt, loading: false}
        case 'LOG_OUT':
            return {...state, session: !!sessionStorage.jwt}
        case 'LOGIN_ERROR':
            return {...state, errMessages: {...state.errMessages, loginError: action.payload.error}, loading: false}
        case 'USER_ERROR':
            return {...state, errMessages: {...state.errMessages, userErrors: action.payload.error}, loading: false}
        default:
            return state;
    }

}