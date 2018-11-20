export default function usersReducer(state,action){
    switch(action.type){
        case 'LOGGING_USER':
            return {...state, authenticating: true, errMessages: {}}
        case 'LOGIN_SUCCESS':
            // console.log("jwt login", sessionStorage.jwt)
            // need to force window reload in order for sessionStorage to be updated in browser
            window.location.reload().then(response => {
                return {...state, session: true, authenticating: false}
            })         
        case 'LOG_OUT':
            // console.log("jwt logout", sessionStorage.jwt)
            return {...state, session: false}
        case 'LOGIN_ERROR':
            return {...state, errMessages: {...state.errMessages, loginError: action.payload.error}, loading: false}
        case 'USER_ERROR':
            return {...state, errMessages: {...state.errMessages, userErrors: action.payload.error}, loading: false}
        default:
            return state;
    }

}