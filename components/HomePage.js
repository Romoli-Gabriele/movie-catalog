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
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div v-for="movie in movieList"  class="col marg">
        <div class="card ">
            <img :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ movie.name }}</h5>
                <h5 class="card-title">{{ movie.title }}</h5>
                <p class="card-text"> 
                    <i v-for="c in calcStar(movie.vote_average)" class="fas fa-star"></i>
                    <i v-show="mezza" class="fas fa-star-half-alt"></i>
                </p>
            </div>
        </div>
        </div>
    </div>
        
    `,
    data() {
        return {
            movieList: [],
            mezza: false
            

            
        }

    },

    methods:{
        calcStar(x){
            x = x/2;
            if (x - Math.round(x) >= 0.35 || x - Math.round(x) <= -0.35) {
                this.mezza = true;
                
            }
            return Math.round(x)
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