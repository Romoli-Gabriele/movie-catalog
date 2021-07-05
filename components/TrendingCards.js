app.component('trending-card', {
    
    props: {
        movieList:{
            type: Array,
            required: true,
        },
       
        

    },
    template:
        /*html*/
        `
    <div v-for="movie in movieList" class="py-0">
        <div  class="card bg-dark mb-3">
            <img :src="'https://image.tmdb.org/t/p/w500/'+image(calcIndex(movie))" @click="this.imgSwitch(calcIndex(movie))" class="card-img-top" alt="...">
            
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
                        <p v-show="this.showList[this.calcIndex(movie)] == false">{{this.description(movie.overview, true)}}   ...</p>
                        <p v-show="this.showList[this.calcIndex(movie)]">{{movie.overview}}</p>
                        <button class="btn btn-outline-success no-border text-light me-4" style="display: inline" @click="this.show(this.calcIndex(movie))">Show {{this.moreOrLess(this.calcIndex(movie))}}</button>
                        <button type="button" class="btn btn-outline-info">
                        <a :href="this.creaLink(movie)" class="mostra-dettagli-button" @onclick="getURLid(movie.id)" target="_blank">dettagli</a>
                        </button>
                    </li>
                    <li v-show="this.collImg[this.calcIndex(movie)]" class="text-light list-group-item bg-dark">
                        <b>Release date: </b>{{this.convertDate(this.calcIndex(movie))}}
                        <b>Original language: </b> {{this.language(movie.original_language)}}
                    </li>
                    <li v-show="this.collImg[this.calcIndex(movie)]" class="list-group-item bg-dark text-light">
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
    </div>
        
    `,
    data() {
        return {
            
            showList: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            collImg:  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            languageList: [{iso_639_1: "de", english_name: "German", name: "Deutsch"},{iso_639_1: "it", english_name: "Italian", name: "Italiano"},{iso_639_1: "ja", english_name: "Japanese", name: "日本語"}, {iso_639_1: "fr", english_name: "French", name: "Français"},{iso_639_1: "en", english_name: "English", name: "English"},{iso_639_1: "es", english_name: "Spanish", name: "Español"}],
            genresList: [{"id": 28,"name": "Action"},{"id": 12,"name": "Adventure"},{"id": 16,"name": "Animation"},{"id": 35,"name": "Comedy"},{"id": 80,"name": "Crime"},{"id": 99,"name": "Documentary"},{"id": 18,"name": "Drama"},{"id": 10751,"name": "Family"},{"id": 14,"name": "Fantasy"},{"id": 36,"name": "History"},{"id": 27,"name": "Horror"},{"id": 10402,"name": "Music"},{"id": 9648,"name": "Mystery"},{"id": 10749,"name": "Romance"},{"id": 878,"name": "Science Fiction"},{"id": 10770,"name": "TV Movie"},{"id": 53,"name": "Thriller"},{"id": 10752,"name": "War"},{"id": 37,"name": "Western"}],
            genresListS: [{"id": 10759,"name": "Action & Adventure"},{"id": 16,"name": "Animation"},{"id": 35,"name": "Comedy"},{"id": 80,"name": "Crime"},{"id": 99,"name": "Documentary"},{"id": 18,"name": "Drama"},{"id": 10751,"name": "Family"},{"id": 10762,"name": "Kids"},{"id": 9648,"name": "Mystery"},{"id": 10763,"name": "News"},{"id": 10764,"name": "Reality"},{"id": 10765,"name": "Sci-Fi & Fantasy"},{"id": 10766,"name": "Soap"},{"id": 10767,"name": "Talk"},{"id": 10768,"name": "War & Politics"},{"id": 37,"name": "Western"}],
            
        }
        

        

    },

    methods: {
        creaLink(movie){
            return './Pages/Details.html?id='+movie.id+'&type='+movie.media_type;
                },
        convertGenres(p){
           if(this.movieList[0].media_type == "movie"){
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
        language(l){
         
                for( j = 0; j < 6; j++){
                    if(this.languageList[j].iso_639_1 == l){
                        return this.languageList[j].english_name;
                    }
                }
                return l;
        },
        convertDate(i){
            let date;
            if(this.movieList[0].media_type == "movie"){
                date = this.movieList[i].release_date;
            }else{
                date = this.movieList[i].first_air_date;
            }
            
            date = date.split("-").reverse().join("/");
            return date;
        },
        imgSwitch(i){
            if(this.collImg[i]){
                this.collImg[i] = false;
            }else{
                this.collImg[i] = true;
            }
        },
        image(i){
            if(this.collImg[i]){
                return this.movieList[i].backdrop_path;
            }else{
                return this.movieList[i].poster_path;
            }

        },
        calcIndex(m) {
            for (var j = 0; j < 20; j++) {
                if (m == this.movieList[j]) {
                    return j;
                }
            }
            console.log(j);
            return j;
        },
        
        description(s, m) {
            if (m) {
                var r = s.slice(0, 70);
            }
            return r
        },

        moreOrLess(j) {
            if (this.showList[j]) {
                return "less"
            } else {
                return "more"
            }

        },

        show(i) {
            if (this.showList[i]) {
                this.showList[i] = false;
            } else {
                this.showList[i] = true;
            }
        },

    },



    





})