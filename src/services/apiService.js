const baseUrl = "https://api.themoviedb.org/3/"
const apiKey = "6f9286d54de4891ea7a5c91779e09786";

const apiCall = (url, query = {}) => {
    query.api_key = apiKey

    return fetch(baseUrl + url + '?' + new URLSearchParams(query).toString())
        .then((response) => response.json())
}

export const apiService = {
    getMovieFetch(type, page) {
        var language = localStorage.getItem('language')
        return apiCall(`/trending/${type}/week`, {
            page,
            language,
        })

    }
}