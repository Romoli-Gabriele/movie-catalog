<template>
 <div  class="card bg-dark mb-3">
            <img :src="'https://image.tmdb.org/t/p/w500/'+image()" @click="imgSwitch()" class="card-img-top" alt="...">
            
            <div class="card-body">
                <h5 class="card-title text-danger home-link fs-3">{{ movie.name }}</h5>
                <h5 class="card-title text-danger home-link fs-3">{{ movie.title }}</h5>
                <p class="card-text">
                <ul class="list-group list-group-flush bg-dark">
                    <li class="list-group-item bg-dark text-light"><b>Review: </b> 
                        <Reviews :value="movie.vote_average" :full="'fa-star'" :half="'fa-star-half-alt'" :empty="'fa-star'" :color="'text-warning'" :type="true"></Reviews>
                    </li>
                    <li class="list-group-item bg-dark text-light"><b>Popularity: </b>
                        <Reviews :value="movie.popularity" :full="'fa-heart'" :half="'fa-heart-broken'" :empty="'fa-heart'" :color="'text-danger'" :type="false"></Reviews>
                    </li>

                    <li class="list-group-item bg-dark text-light">
                        <b>Description: </b>
                        <br>
                        <p v-show="show == false">{{description(movie.overview, true)}}   ...</p>
                        <p v-show="show">{{movie.overview}}</p>
                        <button class="btn btn-outline-success no-border text-light me-4" style="display: inline" @click="toggleShow()">Show {{moreOrLess()}}</button>
                        <router-link :to="{ name: 'Details', params: { id: movie.id, type: movie.media_type} }">
                        <button type="button" class="btn btn-outline-info">
                        Details
                        </button>
                        </router-link>
                    </li>
                    <li v-show="collImg" class="text-light list-group-item bg-dark">
                        <b>Release date: </b>{{convertDate()}}
                        <b>Original language: </b> {{language(movie.original_language)}}
                    </li>
                    <li v-show="collImg" class="list-group-item bg-dark text-light">
                        <ul >
                            <b>Genres: </b>
                            <li :key="p" class="bg-dark text-light" v-for="p in movie.genre_ids">{{convertGenres(p)}}</li>
                        </ul>

                    </li>
                </ul>
                </p>
            </div>
        </div>
</template>

<script>
//import Reviews from "./Reviews.vue";
import { languageService } from "../services/languageService";
import { genreService } from "../services/genreService";

export default {
  name: "Card",
  components: {
    //Reviews,
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      show: false,
      collImg: false,
    };
  },

  methods: {
    convertDate() {
      let date;
      if (this.movie.media_type == "movie") {
        date = this.movie.release_date;
      } else {
        date = this.movie.first_air_date;
      }

      date = date.split("-").reverse().join("/");
      return date;
    },
    language(l) {
      return languageService.getLanguageById(l);
    },
    imgSwitch() {
      if (this.collImg) {
        this.collImg = false;
      } else {
        this.collImg = true;
      }
    },
    image() {
      if (this.collImg) {
        return this.movie.backdrop_path;
      } else {
        return this.movie.poster_path;
      }
    },
    description(s, m) {
      if (m) {
        var r = s.slice(0, 70);
      }
      return r;
    },
    moreOrLess() {
      if (this.show) {
        return "less";
      } else {
        return "more";
      }
    },
    toggleShow() {
      this.show = !this.show;
    },
    convertGenres(p) {
      return genreService.getGenre(this.movie.media_type, p)?.name;
    },
  },
};
</script>