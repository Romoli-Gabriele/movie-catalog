<template>
 <div class="card bg-dark mb-3 sistema-width">
            <img :src="'https://image.tmdb.org/t/p/original/'+image()" @click="imgSwitch()" class="card-img-top" alt="...">
            
            <div class="card-body">
                <h5 class="card-title text-danger home-link fs-3">{{ movie.name }}</h5>
                <h5 class="card-title text-danger home-link fs-3">{{ movie.title }}</h5>
                <p class="card-text">
                <ul class="list-group list-group-flush bg-dark">
                    <li class="list-group-item bg-dark text-light capitalize-first-letter"><b>{{ $t('review')}}: </b> 
                        <Reviews :model-value="movie.vote_average" :fullIcon="'fa-star'" :halfIcon="'fa-star-half-alt'" :emptyIcon="'fa-star'" :color="'text-warning'" :review-or-popularity="'review'" readOnly></Reviews>
                    </li>
                    <li class="list-group-item bg-dark text-light capitalize-first-letter"><b>{{ $t('popularity')}}: </b>
                        <Reviews :model-value="movie.popularity" :fullIcon="'fa-heart'" :halfIcon="'fa-heart-broken'" :emptyIcon="'fa-heart'" :color="'text-danger'" :review-or-popularity="'popularity'" readOnly></Reviews>
                    </li>

                    <li class="list-group-item bg-dark text-light capitalize-first-letter">
                        <b>{{ $t('description')}}: </b>
                        <br>
                        <p v-show="show == false" class="description-height">{{ description(movie.overview, true)}}   <a class="text-danger capitalize-first-letter cursor" @click="toggleShow()">...{{ $t('show-more') }}</a></p>
                        <p v-show="show" class="description-height">{{ movie.overview}} <a class="text-danger capitalize-first-letter cursor" @click="toggleShow()">...{{$t('show-less')}}</a></p>
                        <router-link :to="{ name: 'Details', params: { id: movie.id, type: movie.media_type} }" >
                            <button type="button" class="btn btn-outline-info capitalize-first-letter">
                            {{ $t('detail')}}
                            </button>
                        </router-link>
                    </li>
                    <li v-show="collImg" class="text-light list-group-item bg-dark">
                        <b class="capitalize-first-letter">{{$t('release-date')}}: </b>{{formatterService.formatDate(movie)}}
                    </li>
                    <li v-show="collImg" class="list-group-item bg-dark text-light">
                        <ul class="capitalize-first-letter m-0 p-0">
                            <b>{{$t('genres')}}:</b> <br>
                            <Genres :movieG="movie.genre_ids" :type="movie.media_type"/>
                        </ul>
                    </li>
                </ul>
                </p>
            </div>
        </div>
</template>

<script>
import Reviews from "./Reviews.vue";
import { genreService } from "../services/genreService";
import Genres from "../components/Genres.vue";
import { formatterService } from "../services/formatterService";
export default {
  name: "Card",
  components: {
    Reviews,
    Genres,
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
    dataValue: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      show: false,
      collImg: false,
      formatterService,
    };
  },
  methods: {
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
    toggleShowImgSwitch() {
      this.imgSwitch();
      this.toggleShow();
    },
    description(s, m) {
      if (m) {
        var r = s.slice(0, 170);
      }
      return r;
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
<style>
.capitalize-first-letter::first-letter {
  text-transform: capitalize;
}
.bottone {
  margin-right: 18px !important;
}
.sistema-width {
  min-height: 900px;
  max-height: 2000px;
  height: auto !important;
}
.description-height {
  min-height: 150px;
  max-height: 800px;
  height: auto;
}
.cursor{
  cursor: pointer;
}
</style>