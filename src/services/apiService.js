import {
    languageService
} from "./languageService";
import {
    registerService
} from "./registerService";
const baseUrl = "https://api.themoviedb.org/3/"
const apiKey = "6f9286d54de4891ea7a5c91779e09786";


const apiCall = (url, query = {}) => {
    query.api_key = apiKey
    query.language = languageService.getCurrentLanguage();

    return fetch(baseUrl + url + '?' + new URLSearchParams(query).toString())
        .then((response) => response.json())
}

export const apiService = {
    getMovieFetch(type, page) {
        return apiCall(`/trending/${type}/week`, {
            page
        })

    },
    getSimilar(type, id) {
        return apiCall(`${type}/${id}/similar`);
    },
    getDetail(type, id) {
        return apiCall(`${type}/${id}`)
    },
    getSearch(query) {
        return apiCall(`search/multi`, {
            query
        })
    },
    postRate(type, id, /*voto*/ ) { //metodo che posta la recensione: non funziona, guarda https://developers.themoviedb.org/3/movies/rate-movie per fixarlo 
        apiCall(`/${type}/${id}/rating`, {
            token: registerService.currentToken
        })
    },

    doLogin(redirect) {
        apiCall(`/authentication/token/new`).then((data) => {
            // eslint-disable-next-line no-debugger
            debugger

            location.href = `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=${redirect}`
        });
    }
}