app.component('dettagli', {

    props: {
        type: {
            type: String,
            required: true,
        },
        idf: {
            type: String,
            required: true,
        }

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
        </div>

        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item py-5 active">
                    <div class="row">
                        <div class="col-sm-6">slide 1</div>
                        <div class="col-sm-6">slide 2</div>
                    </div>
                </div>
                <div class="carousel-item py-5">
                    <div class="row">
                        <div class="col-sm-6">slide 3</div>
                        <div class="col-sm-6">slide 4</div>
                    </div>
                </div>
                <div class="carousel-item py-5">
                    <div class="row">
                        <div class="col-sm-6">slide 5</div>
                        <div class="col-sm-6">slide 6</div>
                    </div>
                </div>
                <div class="carousel-item py-5">
                    <div class="row">
                        <div class="col-sm-6">slide 7</div>
                        <div class="col-sm-6">slide 8</div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
    </div>


        
        `,
    data() {

        return {
            similarList: [],
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