const CURRENT_TOKEN_LS_NAME = 'CURRENT_TOKEN_LS_NAME';
const CURRENT_SESSION_TOKEN_LS_NAME = 'CURRENT_SESSION_TOKEN_LS_NAME';

export const registerService = {

    saveToken(token) {
        localStorage.setItem(CURRENT_TOKEN_LS_NAME, JSON.stringify(token))
    },

    get currentToken() {
        return JSON.parse(localStorage.getItem(CURRENT_TOKEN_LS_NAME))
    },

    get isLogged() {
        return !!(this.currentToken && this.currentSessionToken) //restituisce o true o false (per via di !! che cerca di convertire la stringa in un booleano)
    },

     saveSessionToken(sessionToken){
        localStorage.setItem(CURRENT_SESSION_TOKEN_LS_NAME, JSON.stringify(sessionToken))
     },

     get currentSessionToken() {
        return JSON.parse(localStorage.getItem(CURRENT_SESSION_TOKEN_LS_NAME))
    },

}