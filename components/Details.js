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
        `
        <div  class="card bg-dark mb-3">
        <img :src="'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path" class="card-img-top" alt="...">
        
        <div class="card-body">
            <h5 class="card-title text-danger home-link fs-3">{{ movie.name }}</h5>
            <h5 class="card-title text-danger home-link fs-3">{{ movie.title }}</h5>
            <p class="card-text">
            <ul class="list-group list-group-flush bg-dark">
                <li class="list-group-item bg-dark text-light"><b>Review: </b> 
                    <reviews :value="movie.vote_average" :full="'fa-star'" :half="'fa-star-half-alt'" :empty="'fa-star'" :color="'text-warning'" :type="true"></reviews>
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
                    <b>Release date: </b>{{this.convertDate()}}
                    <b>Original language: </b> {{this.language(movie.original_language)}}
                </li>
                <li class="list-group-item bg-dark text-light">
                    <ul >
                        <b>Genres: </b>
                        <li class="bg-dark text-light" v-for="p in movie.genre_ids">{{this.convertGenres(p)}}</li>
                    </ul>

                </li>
            </ul>
            </p>
            </li>
            </ul>
        </div>
    </div>
        `,

    data() {

        return {
            movie: null,
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
            genresList: [{
                "id": 28,
                "name": "Action"
            }, {
                "id": 12,
                "name": "Adventure"
            }, {
                "id": 16,
                "name": "Animation"
            }, {
                "id": 35,
                "name": "Comedy"
            }, {
                "id": 80,
                "name": "Crime"
            }, {
                "id": 99,
                "name": "Documentary"
            }, {
                "id": 18,
                "name": "Drama"
            }, {
                "id": 10751,
                "name": "Family"
            }, {
                "id": 14,
                "name": "Fantasy"
            }, {
                "id": 36,
                "name": "History"
            }, {
                "id": 27,
                "name": "Horror"
            }, {
                "id": 10402,
                "name": "Music"
            }, {
                "id": 9648,
                "name": "Mystery"
            }, {
                "id": 10749,
                "name": "Romance"
            }, {
                "id": 878,
                "name": "Science Fiction"
            }, {
                "id": 10770,
                "name": "TV Movie"
            }, {
                "id": 53,
                "name": "Thriller"
            }, {
                "id": 10752,
                "name": "War"
            }, {
                "id": 37,
                "name": "Western"
            }],
            genresListS: [{
                "id": 10759,
                "name": "Action & Adventure"
            }, {
                "id": 16,
                "name": "Animation"
            }, {
                "id": 35,
                "name": "Comedy"
            }, {
                "id": 80,
                "name": "Crime"
            }, {
                "id": 99,
                "name": "Documentary"
            }, {
                "id": 18,
                "name": "Drama"
            }, {
                "id": 10751,
                "name": "Family"
            }, {
                "id": 10762,
                "name": "Kids"
            }, {
                "id": 9648,
                "name": "Mystery"
            }, {
                "id": 10763,
                "name": "News"
            }, {
                "id": 10764,
                "name": "Reality"
            }, {
                "id": 10765,
                "name": "Sci-Fi & Fantasy"
            }, {
                "id": 10766,
                "name": "Soap"
            }, {
                "id": 10767,
                "name": "Talk"
            }, {
                "id": 10768,
                "name": "War & Politics"
            }, {
                "id": 37,
                "name": "Western"
            }],
        }
    },
    methods: {
        convertDate(){
            let date;
            if(this.movie.media_type == "movie"){
                date = this.movie.release_date;
            }else{
                date = this.movie.first_air_date;
            }
            
            date = date.split("-").reverse().join("/");
            return date;
        },
        language(l){
         
            for( j = 0; j < 6; j++){
                if(this.languageList[j].iso_639_1 == l){
                    return this.languageList[j].english_name;
                }
            }
            return l;
    },
    },

    mounted(){
            fetch('https://api.themoviedb.org/3/'+this.movie+'/' + this.idf + '?api_key=6f9286d54de4891ea7a5c91779e09786&language=en-US')
            .then(response => response.json())
            .then(data => {
            this.movie = data;
            });
    },

    convertGenres(p){
        if(this.movie.media_type == "movie"){
         for( j = 0; j < 19; j++){
             if(this.genresList[j].id == p){
                 return this.genresList[j].name;
             }
         }
        }else{
         for( j = 0; j < 16; j++){
             if(this.genresListS[j].id == p){
                 return this.genresListS[j].name;
             }
         }
        }     
     },

})