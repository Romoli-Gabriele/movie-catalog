app.component('homepage', {
    props:{
        tipo:{
            type: Boolean,
            required: true,
        }
    }   

,
    template:
        /*html*/
        `



    <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-4">
        <div v-for="movie in movieList"  class="col marg">
        <div class="card ">
            <img :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ movie.name }}</h5>
                <h5 class="card-title">{{ movie.title }}</h5>
                <p class="card-text"> 
                    <i v-for="c in calcStar(movie.vote_average)" class="fas fa-star text-warning"></i>
                    <i v-show="mezza" class="fas fa-star-half-alt text-warning"></i>
                    <i v-for="k in calWstar(movie.vote_average)" class="far fa-star text-warning" ></i>
                    <p class="ali-r">
                    
                    <i v-for="e in calcPop(movie.popularity)" class="fas fa-heart text-danger"></i>
                    <i v-show="mezzo" class="fas fa-heart-broken text-danger"></i>
                    <i v-for="g in calcWpop(movie.popularity)" class="far fa-heart text-danger"></i>
                   
                  </p>
                </p>

            </div>
        </div>
        </div>
    </div>
        
    `,
    data() {
        return {
            movieList: [],
            mezza: false,
            mezzo: false
            

            
        }

    },

    methods:{
        calcStar(x){
            x = x/2;
            if (x - Math.round(x) >= 0.35 || x - Math.round(x) <= -0.35) {
                this.mezza = true;
                
            }
            return Math.round(x)
        },
        calWstar(x){
            let y = this.calcStar(x);
            y = 5 - y;
            if (this.mezza) {
                y--;
            }
            return y;

        },
        calcPop(x){
            x = x/1000;
            if (x - Math.round(x) >= 0.4  || x - Math.round(x) <= -0.4) {
                this.mezzo = true;
                
            } 
            if(Math.round(x)>5){
                return 5
            }
            return Math.round(x)
        },
        calcWpop(x){
            let y = this.calcPop(x);

            y = 5 - y;
            if(this.mezzo){
                y--;
            }
            return y;
        }
    },
    
        

    mounted() {
        if(this.tipo){
            fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=6f9286d54de4891ea7a5c91779e09786')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.movieList = data.results;
                            
            });
        }else{
            fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=6f9286d54de4891ea7a5c91779e09786')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.movieList = data.results;
            });
            
        }
        

    },





})