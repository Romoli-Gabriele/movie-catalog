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
    <div v-for="movie in movieList">
        <div  class="card ">
            <img :src="'https://image.tmdb.org/t/p/w500/'+image(calcIndex(movie))" @click="this.imgSwitch(calcIndex(movie))" class="card-img-top" alt="...">
            
            <div class="card-body">
                <h5 class="card-title">{{ movie.name }}</h5>
                <h5 class="card-title">{{ movie.title }}</h5>
                <p class="card-text">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Review: </b> 
                        <reviews :value="calcStar(movie.vote_average)" :valE="calcWstar(movie.vote_average)" :full="'fa-star'" :half="'fa-star-half-alt'" :empty="'fa-star'" :color="'text-warning'" :valH="this.mezza"></reviews>
                    </li>
                    <li class="list-group-item"><b>Popularity: </b>
                        <reviews :value="calcPop(movie.popularity)" :valE="calcWpop(movie.popularity)" :full="'fa-heart'" :half="'fa-heart-broken'" :empty="'fa-heart'" :color="'text-danger'" :valH="this.mezzo"></reviews>
                    </li>

                    <li class="list-group-item">
                        <b>Description: </b>
                        <br>
                        <p v-show="this.showList[this.calcIndex(movie)] == false">{{this.description(movie.overview, true)}}   ...</p>
                        <p v-show="this.showList[this.calcIndex(movie)]">{{movie.overview}}</p>
                        <button class="no-border" @click="this.show(this.calcIndex(movie))">Show {{this.moreOrLess(this.calcIndex(movie))}}</button>
                        
                    </li>
                    <li v-show="this.collImg[this.calcIndex(movie)]" class="list-group-item">
                        <b>Release date: </b>{{this.convertDate(this.calcIndex(movie))}}
                        <b>Original language: </b> {{movie.original_language}}
                    </li>
                    <li v-show="this.collImg[this.calcIndex(movie)]" class="list-group-item">
                        <ul >
                            <b>Genres: </b>
                            <li v-for="p in movie.genre_ids">{{this.convertGenres(p)}}</li>
                        </ul>

                    </li>
                </ul>
                  
                </p>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">

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
            mezza: false, //mezza stella
            mezzo: false, // mezzo cuore
            genresList: [{"id": 28,"name": "Action"},{"id": 12,"name": "Adventure"},{"id": 16,"name": "Animation"},{"id": 35,"name": "Comedy"},{"id": 80,"name": "Crime"},{"id": 99,"name": "Documentary"},{"id": 18,"name": "Drama"},{"id": 10751,"name": "Family"},{"id": 14,"name": "Fantasy"},{"id": 36,"name": "History"},{"id": 27,"name": "Horror"},{"id": 10402,"name": "Music"},{"id": 9648,"name": "Mystery"},{"id": 10749,"name": "Romance"},{"id": 878,"name": "Science Fiction"},{"id": 10770,"name": "TV Movie"},{"id": 53,"name": "Thriller"},{"id": 10752,"name": "War"},{"id": 37,"name": "Western"}],
            genresListS: [
                {
                    "id": 10759,
                    "name": "Action & Adventure"
                },
                {
                    "id": 16,
                    "name": "Animation"
                },
                {
                    "id": 35,
                    "name": "Comedy"
                },
                {
                    "id": 80,
                    "name": "Crime"
                },
                {
                    "id": 99,
                    "name": "Documentary"
                },
                {
                    "id": 18,
                    "name": "Drama"
                },
                {
                    "id": 10751,
                    "name": "Family"
                },
                {
                    "id": 10762,
                    "name": "Kids"
                },
                {
                    "id": 9648,
                    "name": "Mystery"
                },
                {
                    "id": 10763,
                    "name": "News"
                },
                {
                    "id": 10764,
                    "name": "Reality"
                },
                {
                    "id": 10765,
                    "name": "Sci-Fi & Fantasy"
                },
                {
                    "id": 10766,
                    "name": "Soap"
                },
                {
                    "id": 10767,
                    "name": "Talk"
                },
                {
                    "id": 10768,
                    "name": "War & Politics"
                },
                {
                    "id": 37,
                    "name": "Western"
                }
            ]
        }

    },

    methods: {
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
        calcStar(x) {
            x = x / 2;
            if (x - Math.round(x) >= 0.35 || x - Math.round(x) <= -0.35) {
                this.mezza = true;

            }
            return Math.round(x)
        },
        
        calcPop(x) {
            x = x / 1000;
            if (x - Math.round(x) >= 0.4 || x - Math.round(x) <= -0.4) {
                if (x < 5) {
                    this.mezzo = true;
                }

            } else {
                this.mezzo = false
            }

            if (Math.round(x) > 5) {

                return 5
            }

            return Math.round(x) > 0 ? Math.round(x) : 0
        },
        calcWpop(x) {
            let y = this.calcPop(x);

            y = 5 - y;
            if (this.mezzo && y > 0) {
                y--;

            }
            
            return y;
        },
        calcWstar(x){
            
            let y = this.calcStar(x);

            y = 5 - y;
            if (this.mezza && y > 0) {
                y--;
            }
            
            return y;
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