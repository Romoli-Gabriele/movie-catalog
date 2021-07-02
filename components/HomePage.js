app.component('homepage', {
    props: {
        tipo: {
            type: Boolean,
            required: true,
        }
    }

    ,
    template:
        /*html*/
        `



    <div class="row row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-5">
        <div v-for="movie in movieList"  class="col marg">
        <div class="card ">
            <img :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" class="card-img-top" alt="...">
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
                    
                </ul>
                  
                </p>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">

                </li>
                </ul>
            </div>
        </div>
        </div>
    </div>
        
    `,
    data() {
        return {
            movieList: [],
            showList: [false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
            mezza: false, //mezza stella
            mezzo: false, // mezzo cuore





        }

    },

    methods: {
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



    mounted() {
        if (this.tipo) {
            fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=6f9286d54de4891ea7a5c91779e09786')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.movieList = data.results;



                });
        } else {
            fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=6f9286d54de4891ea7a5c91779e09786')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.movieList = data.results;
                });

        }



    },





})