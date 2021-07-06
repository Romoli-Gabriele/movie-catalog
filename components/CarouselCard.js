app.component('carousel-card', {

    props: {
        type:{
            type: String,
            required: true,
        },
        movie: {
            type: Object,
            required: true,
        },
    },
    template:
    /*html*/
    `

    <div class="card bg-dark mb-3">
        <img :src="'https://image.tmdb.org/t/p/w300/'+movie.backdrop_path">
    <div class="card-body">
    <h5 class="card-title text-danger home-link fs-3">{{ movie.title }}</h5>
    <p class="card-text text-light home-link fs-4">{{movie.tagline}}</p>    
    <p class="card-text text-light container">
        <b>Description: </b>
        <br>
        {{movie.overview}}
        <br>
    </p>

        <button type="button" class="btn btn-outline-warning "><a :href="movie.homepage" class="mostra-dettagli-button" target="_blank">Watch Now!</a></button>

        <a :href="this.creaLink(movie)" class="mostra-dettagli-button">
        <button type="button" class="btn btn-outline-info mar-l">Details</button>   
        </a>
    </div>
    </div>

    <!--
    <div class="container card bg-dark mb-3" style="width: 18rem">
            <div class="row">
                <div class="col">
                    <img :src="'https://image.tmdb.org/t/p/w300/'+movie.poster_path">
                </div>
                <div class="col">
                <div class="card-body">
                <h5 class="card-title text-danger home-link fs-3">{{ movie.name }}</h5>
                <h5 class="card-title text-danger home-link fs-3">{{ movie.title }}</h5>
                <p class="card-title text-light home-link fs-4">{{movie.tagline}}</p>
                <p class="card-text">
                <ul class="list-group list-group-flush bg-dark">
            <li class="list-group-item bg-dark text-light">
                            <b>Description: </b>
                            <br>
                            <p>{{movie.overview}}</p>
                        </li>
                    <li class="text-light list-group-item bg-dark">
                    <br>
                    <button type="button" class="btn btn-outline-warning "><a :href="movie.homepage" class="mostra-dettagli-button" target="_blank">Watch Now!</a></button>
                    
                    <button type="button" class="btn btn-outline-info ms-1">
                    <a :href="this.creaLink(movie)" class="mostra-dettagli-button">Details</a>
                    </button>   
                    </li>
                </ul>
                </p>
            </div>
                </div>
            </div>
        </div>
        -->
    `,
    methods: {
        creaLink() {
            return './Details.html?id=' +this.movie.id+ '&type='+this.type;
        },
    }
})