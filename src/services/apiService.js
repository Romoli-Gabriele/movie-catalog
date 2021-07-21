import {
    languageService
} from "./languageService";
import {
    registerService
} from "./registerService";
const baseUrl = "https://api.themoviedb.org/3/"
const apiKey = "6f9286d54de4891ea7a5c91779e09786";

const apiCall = (url, query = {}, options = {}) => {
    query.api_key = apiKey
    query.language = languageService.getCurrentLanguage();

    return fetch(baseUrl + url + '?' + new URLSearchParams(query).toString(), options)
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
        postRate(type, id, voto) {
            return apiCall(`${type}/${id}/rating`, {
                session_id: registerService.currentSessionToken
            }, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    value: voto
                }),

            }).then()
        },

        doLogin(redirect) {
            apiCall(`authentication/token/new`).then((data) => {

                location.href = `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=${redirect}`
            });
        },

        createNewSession() {
            apiCall(`authentication/session/new`, {}, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    request_token: registerService.currentToken
                }),

            }).then((data) => {

                registerService.saveSessionToken(data.session_id)
            });
        },

        getMyReviews(type) {
            apiCall(`account/${registerService.currentToken}/rated/${type}`, {
                    language: languageService.getCurrentLanguage,
                    session_id: registerService.currentSessionToken
            }).then()
            }
        }