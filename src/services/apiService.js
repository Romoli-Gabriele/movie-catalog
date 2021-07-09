const baseUrl = "https://api.themoviedb.org/3/"
const apiKey = "6f9286d54de4891ea7a5c91779e09786";
const defaultLanguage = 'en-US'

const apiCall = (url, query = {}) => {
    query.api_key = apiKey
    query.language = defaultLanguage

    return fetch(baseUrl + url + '?' + new URLSearchParams(query).toString())
        .then((response) => response.json())
}

export const apiService = {
    getMovieFetch(type, page) {
        return apiCall(`/trending/${type}/week`, {
            page
        })

    }
}