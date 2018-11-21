
function authHeader(token) {
    // if (sessionStorage.jwt){
        // return {'AUTHORIZATION': `Bearer ${sessionStorage.getItem('jwt')}`}
        // }
    return {'AUTHORIZATION': `Bearer ${token}`}

}

export const reqHeaders = (token) => {
    let headers = Object.assign({
        'Content-Type': 'application/json',
        'Accept': 'application/json'},
        authHeader(token)
        )

    return headers;
}



