export default function usersReducer(state,action){
    switch(action.type){
         case 'LOGGING_IN_USER':
            return {...state, authenticating: true, errMessages: {}}
        case 'LOGIN_USER':
            return {...state, jwt: action.payload, authenticating: false}
        case  'LOGIN_ERROR':
            return {...state, suggestion: {}, errMessages: {...state.errMessages, UserError: action.payload.error}, loading: false}
        default:
            return state;
    }

}