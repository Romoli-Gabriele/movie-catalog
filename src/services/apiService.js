import {
    languageService
} from "./languageService";
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
    postRate(type, id, /*voto*/) { //metodo che posta la recensione: non funziona, guarda https://developers.themoviedb.org/3/movies/rate-movie per fixarlo 
        var guest_id;
        
        apiCall(`/authentication/guest_session/new`).then((data) => {
            guest_id = data.guest_session_id;

        });
        apiCall(`/${type}/${id}/rating`, { guest_id })
    },
}
