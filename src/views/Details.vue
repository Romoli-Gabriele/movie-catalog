<template>
  <div>
    <div class="mx-3 card bg-dark mb-3 py-3">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
          <img
            class="mx-auto d-block w-100 px-3"
            :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
          />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
          <div class="card-body">
            <h5 class="card-title text-danger home-link fs-2">
              {{ movie.name }}
            </h5>
            <h5 class="card-title text-danger home-link fs-2">
              {{ movie.title }}
            </h5>
            <p class="card-title text-light home-link fs-4">
              {{ movie.tagline }}
            </p>
            <span
              class="badge bg-info mx-1 my-2 text-dark"
              :key="p.id"
              v-for="p in movie.genres"
              >{{ p.name }}</span
            >
            <p class="text-light first-letter-capitalize">
              <b>{{ $t('review')}}:</b>
              <Reviews
                :value="movie.vote_average"
                :full="'fa-star'"
                :half="'fa-star-half-alt'"
                :empty="'fa-star'"
                :color="'text-warning'"
                :type="true"
              />
              ({{ Math.round((movie.vote_average / 2) * 10) / 10 }})
            </p>
            <p class="text-light first-letter-capitalize">
              <b>{{$t('number-of-reviews')}}:</b> {{ movie.vote_count }}
            </p>
            <p class="text-light first-letter-capitalize">
              <b>{{ $t('popularity')}}: </b>
              <Reviews
                :value="movie.popularity"
                :full="'fa-heart'"
                :half="'fa-heart-broken'"
                :empty="'fa-heart'"
                :color="'text-danger'"
                :type="false"
              />
              ({{ Math.round((movie.popularity / 1000) * 10) / 10 }})
            </p>
            <p class="text-light first-letter-capitalize">
              <b>{{ $t('description')}}: </b>
              <br />
              {{ movie.overview }}
            </p>
            <p class="text-light first-letter-capitalize"><b>{{ $t('status')}}:</b> {{ movie.status }}</p>
            <p class="text-light first-letter-capitalize">
              <b>{{ $t('release-date')}}: </b> {{ convertDate() }}
            </p>
            <p class="text-light first-letter-capitalize">
              <b>{{ $t('original-language')}}: </b>
              {{ language(movie.original_language) }}
            </p>
            <br />
            <br />
            <a :href="movie.homepage" target="_blank"
              ><button type="button" class="btn btn-outline-warning text-light">
                {{ $t('watch-now')}}
              </button>
            </a>
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
<<<<<<< HEAD
=======
import { languageService } from "../services/languageService";
import { apiService } from "../services/apiService";

>>>>>>> 2e4f33d40531c52fcc2c55364754ec25cf3041d2
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
      
    };
  },
  methods: {
    language(l) {
      return languageService.getLanguageById(l).name;
    },
    convertDate() {
      let date;
      if (this.$route.params.type == "movie") {
        date = this.movie.release_date;
      } else {
        date = this.movie.first_air_date;
      }
      if (!date) return "";
<<<<<<< HEAD
      if(localStorage.getItem('language') == 'it'){
=======

      if(languageService.getCurrentLanguage() == 'it'){
>>>>>>> 2e4f33d40531c52fcc2c55364754ec25cf3041d2
        date = date.split("-").reverse().join("/");
      }
      return date;
    },
<<<<<<< HEAD
    callDati() {
      fetch(
        "https://api.themoviedb.org/3/" +
          this.$route.params.type +
          "/" +
          this.$route.params.id +
          "/similar?api_key=6f9286d54de4891ea7a5c91779e09786&language="+localStorage.getItem('language')+"&page=1"
      )
        .then((response) => response.json())
        .then((data) => {
          this.similarList = data.results;
        });
      fetch(
        "https://api.themoviedb.org/3/" +
          this.$route.params.type +
          "/" +
          this.$route.params.id +
          "?api_key=6f9286d54de4891ea7a5c91779e09786&language="+localStorage.getItem('language')
      )
        .then((response) => response.json())
        .then((data) => {
          this.movie = data;
        });
=======
    callDati(){
      apiService.getSimilar(this.$route.params.type, this.$route.params.id).then((data) => {
      this.similarList = data.results;
    });
    apiService.getDetail(this.$route.params.type, this.$route.params.id).then((data) => {
      this.movie = data;
    });
>>>>>>> 2e4f33d40531c52fcc2c55364754ec25cf3041d2
    },
    
  },
  mounted() {
    this.callDati();
  },
  watch: {
    "$route.params.search": {
      handler: function (search) {
        console.log(search);
        this.callDati();
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style scoped>
.first-letter-capitalize::first-letter{
  text-transform: capitalize;
}
</style>