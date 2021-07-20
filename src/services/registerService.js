const CURRENT_TOKEN_LS_NAME = 'CURRENT_TOKEN_LS_NAME'

export const registerService = {

    saveToken(token) {
        localStorage.setItem(CURRENT_TOKEN_LS_NAME, token)
    },


    get currentToken() {
        return localStorage.getItem(CURRENT_TOKEN_LS_NAME)
    },

    get isLogged() {
        return !!(this.currentToken) //restituisce o true o false (per via di !! che cerca di convertire la stringa in un booleano)
    }

}