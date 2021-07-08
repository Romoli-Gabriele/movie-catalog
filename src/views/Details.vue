<template>
<div>

<div class="mx-3 card bg-dark mb-3 py-3">
    <div class="row ">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
              <img class="mx-auto d-block w-100 ps-5" :src="'https://image.tmdb.org/t/p/original/'+movie.poster_path">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div class="card-body">
                <h5 class="card-title text-danger home-link fs-3">{{ movie.name }}</h5>
                <h5 class="card-title text-danger home-link fs-3">{{ movie.title }}</h5>
                <p class="card-title text-light home-link fs-4">{{movie.tagline}}</p>
                <p class="card-text">
                <ul class="list-group list-group-flush bg-dark">
                    <li class="list-group-item bg-dark text-light"><b>Review: </b> 
                        <Reviews :value="movie.vote_average" :full="'fa-star'" :half="'fa-star-half-alt'" :empty="'fa-star'" :color="'text-warning'" :type="true" />
                        <p>({{Math.round(movie.vote_average/2 * 10) / 10}})</p>
                        <br>
                        <b>Number of reviews:</b> {{this.movie.vote_count}}
                    </li>
                    <li class="list-group-item bg-dark text-light"><b>Popularity: </b>
                        <Reviews :value="movie.popularity" :full="'fa-heart'" :half="'fa-heart-broken'" :empty="'fa-heart'" :color="'text-danger'" :type="false" />
                        <p>({{
Math.round(movie.popularity/1000 * 10) / 10}})</p>
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
                        <ul>
                            <b>Genres: </b>
                            <li class="bg-dark text-light" :key="p.id" v-for="p in movie.genres">{{p.name}}</li>
                        </ul>
                    </li>
                </ul>
                </p>
            </div>
                </div>
            </div>
</div>
<Carousel :similarList="similarList" :type="type" />
</div>
</template>

<script>
import Reviews from "../components/Reviews.vue";
import Carousel from "../components/Carousel.vue";


export default {
  name: "Details",
  components: {
    Reviews,
    Carousel,
  
  },

  data() {
    return {
      similarList: [],
      movie: {},
      movieList: [],
      mezza: false, //mezza stella
      mezzo: false, // mezzo cuore
      languageList: [
        {
          iso_639_1: "de",
          english_name: "German",
          name: "Deutsch",
        },
        {
          iso_639_1: "it",
          english_name: "Italian",
          name: "Italiano",
        },
        {
          iso_639_1: "ja",
          english_name: "Japanese",
          name: "日本語",
        },
        {
          iso_639_1: "fr",
          english_name: "French",
          name: "Français",
        },
        {
          iso_639_1: "en",
          english_name: "English",
          name: "English",
        },
        {
          iso_639_1: "es",
          english_name: "Spanish",
          name: "Español",
        },
      ],
    };
  },
  methods: {
    language(l) {
      for (let j = 0; j < 6; j++) {
        if (this.languageList[j].iso_639_1 == l) {
          return this.languageList[j].english_name;
        }
      }
      return l;
    },
    convertDate() {
        let date;
      if (this.$route.params.type == "movie") {
        date = this.movie.release_date;
      } else {
        date = this.movie.first_air_date;
      }
      if (!date) return "";
      date = date.split("-").reverse().join("/");
      return date;
    },
    callDati(){
      fetch(
      "https://api.themoviedb.org/3/" +
        this.$route.params.type +
        "/" +
        this.$route.params.id +
        "/similar?api_key=6f9286d54de4891ea7a5c91779e09786&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        this.similarList = data.results;
        // eslint-disable-next-line no-debugger
        debugger
      });
      
    fetch(
      "https://api.themoviedb.org/3/"+this.$route.params.type+"/" +
        this.$route.params.id +"?api_key=6f9286d54de4891ea7a5c91779e09786&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => {
        this.movie = data;
       
        
      });
    },
    
  },
  

  mounted() {
    this.callDati();
  },
  watch: { 
     '$route.params.search': {
        handler: function(search) {
           console.log(search)
           this.callDati();
        },
        deep: true,
        immediate: true
      }
}
};
</script>
