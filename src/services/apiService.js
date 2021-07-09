export const apiService = {
    getMovieFetch(type, page) {
        let ret = [];
        fetch(
                "https://api.themoviedb.org/3/trending/" + type + "/week?api_key=6f9286d54de4891ea7a5c91779e09786&page=" + page
            )
            .then((response) => response.json())
            .then((data) => {
                ret = data.results;
            });
        return ret;
    }
}