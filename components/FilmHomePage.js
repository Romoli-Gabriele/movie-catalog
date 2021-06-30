app.component('film-homepage', {

    template:
        /*html*/
        `
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div v-for="movie in movieList"  class="col">
        <div class="card">
            <img :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{movie.name}}</h5>
                <p class="card-text">movie.</p>
            </div>
        </div>
        </div>
    </div>
        
    `,
    data() {
        return {
            movieList: []
        }

    },
    mounted() {
        fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=6f9286d54de4891ea7a5c91779e09786')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                //debugger
                this.movieList = data.results
            });

    },





})