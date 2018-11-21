
function authHeader() {
    if (sessionStorage.getItem('jwt')){
        return {'AUTHORIZATION': `Bearer ${sessionStorage.getItem('jwt')}`}
        }
}

export const reqHeaders = Object.assign({
    'Content-Type': 'application/json',
    'Accept': 'application/json'},
    authHeader()
    )



