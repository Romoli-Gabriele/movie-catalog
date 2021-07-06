app.component('dettagli', {

    props: {
        type: {
            type: String,
            required: true,
        },
        idf: {
            type: String,
            required: true,
            value: 0,
        },

    },
    template:
        /*html*/
        `<div class="container card bg-dark mb-3">
            <div class="row">
                <div class="col">
                    <img :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path">
                </div>
                <div class="col">
                <div class="card-body">
                <h5 class="card-title text-danger home-link fs-3">{{ movie.name }}</h5>
                <h5 class="card-title text-danger home-link fs-3">{{ movie.title }}</h5>
                <p class="card-title text-light home-link fs-4">{{movie.tagline}}</p>
                <p class="card-text">
                <ul class="list-group list-group-flush bg-dark">
                <li class="list-group-item bg-dark text-light"><b>Review: </b> 
                <reviews :value="movie.vote_average" :full="'fa-star'" :half="'fa-star-half-alt'" :empty="'fa-star'" :color="'text-warning'" :type="true"></reviews>
                <br>
                <b>Number of reviews:</b> {{this.movie.vote_count}}
                </li>
            <li class="list-group-item bg-dark text-light"><b>Popularity: </b>
                <reviews :value="movie.popularity" :full="'fa-heart'" :half="'fa-heart-broken'" :empty="'fa-heart'" :color="'text-danger'" :type="false"></reviews>
            </li>
            <li class="list-group-item bg-dark text-light">
                            <b>Description: </b>
                            <br>
                            <p>{{movie.overview}}</p>
                        </li>
                    <li class="text-light list-group-item bg-dark">
                    <b>Status:</b> {{this.movie.status}}
                    <br>
                    <b>Release date: </b> {{this.convertDate()}}
                    <br>
                    <b>Original language: </b> {{this.language(movie.original_language)}}
                    <br>
                    <br>
                    <br>
                    <button type="button" class="btn btn-outline-warning "><a :href="movie.homepage" class="mostra-dettagli-button" target="_blank">Watch Now!</a></button>
                        
                    </li>
                    <li class="list-group-item bg-dark text-light">
                        <ul >
                            <b>Genres: </b>
                            <li class="bg-dark text-light" v-for="p in movie.genres">{{p.name}}</li>
                        </ul>
    
                    </li>
                </ul>
                </p>
            </div>
                </div>
            </div>
        </div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
          <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="..." alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
          <div class="carousel-item">
            
          </div>
          <div class="carousel-item">
            
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        `,

    data() {

        return {
            similarList:[],
            movie: null,
            movieList: [],
            mezza: false, //mezza stella
            mezzo: false, // mezzo cuore
            languageList: [{
                iso_639_1: "de",
                english_name: "German",
                name: "Deutsch"
            }, {
                iso_639_1: "it",
                english_name: "Italian",
                name: "Italiano"
            }, {
                iso_639_1: "ja",
                english_name: "Japanese",
                name: "日本語"
            }, {
                iso_639_1: "fr",
                english_name: "French",
                name: "Français"
            }, {
                iso_639_1: "en",
                english_name: "English",
                name: "English"
            }, {
                iso_639_1: "es",
                english_name: "Spanish",
                name: "Español"
            }],
        }
    },
    methods: {

        language(l) {

            for (j = 0; j < 6; j++) {
                if (this.languageList[j].iso_639_1 == l) {
                    return this.languageList[j].english_name;
                }
            }
            return l;
        },
        convertDate() {
            let date;

            if (this.type == "movie") {
                date = this.movie.release_date;
            } else {
                date = this.movie.first_air_date;
            }
            date = date.split("-").reverse().join("/");
            return date;
        },
    },

    mounted() {
        fetch('https://api.themoviedb.org/3/' + this.type + '/' + this.idf + '?api_key=6f9286d54de4891ea7a5c91779e09786&language=en-US')
            .then(response => response.json())
            .then(data => {
                this.movie = data;
            });
            fetch('https://api.themoviedb.org/3/' + this.type + '/' + this.idf + '/similar?api_key=6f9286d54de4891ea7a5c91779e09786&language=en-US&page=1')
            .then(response => response.json())
            .then(data => {
                this.similarList = data.results;
            });
            
    }
})