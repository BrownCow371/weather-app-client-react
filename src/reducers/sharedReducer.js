
export default function sharedReducer(state, action){
    switch(action.type){
        case 'LOADING_DATA':
            return {...state, loading: true, errMessages: {}}
        default:
            return state;
    }

}