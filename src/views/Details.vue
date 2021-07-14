<template>
  <div>
    <div class="mx-3 card bg-dark mb-3 py-3">
      <div class="card-body card-body-max-height">
        <div class="row">
          <div
            class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6"
          >
            <div
              v-show="type != 'person'"
              class="bindIMG"
              :style="BindBgImage(movie.poster_path)"
              style="
                max-height: 100%;
                min-height: 900px;
                height: auto !important;
              "
            />
            <div
              
              class="bindIMG"
              :style="BindBgImage(movie.profile_path)"
              style="
                max-height: 100%;
                min-height: 900px;
                height: auto !important;
              "
            />
            
          </div>
          <div
            class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6"
          >
            <div class="card-text-height">
              <h5
                class="card-title text-danger home-link fs-2"
              >
                {{ movie.title }}
              </h5>
              <h5 class="card-title text-danger home-link fs-2">
                {{ movie.name }}
              </h5>
              <p
                v-show="type != 'person'"
                class="card-title text-light home-link fs-4"
              >
                {{ movie.tagline }}
              </p>
              <p
                v-show="type == 'person'"
                class="card-title text-light home-link fs-4"
              >
                {{ movie.known_for_department }}
              </p>
              <span
                v-show="type != 'person'"
                class="badge bg-info mx-1 my-2 text-dark"
                :key="p.id"
                v-for="p in movie.genres ?? []"
              >
                {{ p.name }}
              </span>
              <p
                v-show="type != 'person'"
                class="text-light first-letter-capitalize"
              >
                <b>{{ $t("review") }}:</b>
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
              <p
                v-show="type != 'person'"
                class="text-light first-letter-capitalize"
              >
                <b>{{ $t("number-of-reviews") }}:</b> {{ movie.vote_count }}
              </p>
              <p class="text-light first-letter-capitalize">
                <b>{{ $t("popularity") }}: </b>
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
              <p
                v-show="type != 'person'"
                class="text-light first-letter-capitalize"
              >
                <b>{{ $t("description") }}: </b>
                <br />
                {{ movie.overview }}
              </p>
              <p
                v-show="type != 'person'"
                class="text-light first-letter-capitalize"
              >
                <b>{{ $t("status") }}:</b> {{ movie.status }}
              </p>
              <p
                v-show="type != 'person'"
                class="text-light first-letter-capitalize"
              >
                <b>{{ $t("release-date") }}: </b> {{ convertDate() }}
              </p>
              <p
                
                class="text-light first-letter-capitalize"
              >
                <b> compleanno: </b> {{ convertDate() }}
              </p>
              <p
                v-show="type != 'person'"
                class="text-light first-letter-capitalize"
              >
                <b>{{ $t("original-language") }}: </b>
                {{ language(movie.original_language) }}
              </p>
              <br />
              <br />
              <a
                v-show="type != 'person'"
                :href="movie.homepage"
                target="_blank"
                ><button
                  type="button"
                  class="btn btn-outline-warning text-light"
                >
                  {{ $t("watch-now") }}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Carousel  v-show="type != 'person'" :similarList="similarList" :type="type" />
  </div>
</template>


<script>
import Reviews from "../components/Reviews.vue";
import Carousel from "../components/Carousel.vue";
import { languageService } from "../services/languageService";
import { apiService } from "../services/apiService";

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
      type: this.$route.params.type,
    };
  },
  methods: {
    language(l) {
      return languageService.getLanguageById(l)?.name;
    },
    convertDate() {
      // eslint-disable-next-line no-debugger
      debugger
      let date;
      if (this.type == "movie") {
        date = this.movie.release_date;
      } else if(this.type =='tv') {
        date = this.movie.first_air_date;
      }else{
        date = this.movie.birthday;
      }
      if (!date) return "";

      if (languageService.getCurrentLanguage() == "it") {
        date = date.split("-").reverse().join("/");
      }
      return date;
    },
    BindBgImage(poster) {
      return `background: url('https://image.tmdb.org/t/p/w500${poster}') no-repeat center center;`;
    },
    callDati() {
      apiService
        .getDetail(this.type, this.$route.params.id)
        .then((data) => {
          this.movie = data;
        });

      if (
        this.$route.params.type == "movie" ||
        this.$route.params.type == "tv"
      ) {
        apiService
          .getSimilar(this.$route.params.type, this.$route.params.id)
          .then((data) => {
            this.similarList = data.results;
          });
      } else {
        this.similarList = this.movie.known_for;
      }
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
.first-letter-capitalize::first-letter {
  text-transform: capitalize;
}

.bindIMG {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.card-body-max-height {
  max-height: 1600px;
  height: auto;
}
.card-text-height {
  height: auto;
  max-height: 900px;
}
</style>