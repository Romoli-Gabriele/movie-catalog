<template>
  <div>
    <div class="mx-3 card bg-dark mb-3 py-3">
      <div class="card-body card-body-max-height">
        <div class="row">
          <div
            class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6"
          >
            <div
              v-show="$route.params.type != 'person'"
              class="bindIMG"
              :style="BindBgImage(movie.poster_path)"
              style="
                max-height: 100%;
                min-height: 900px;
                height: auto !important;
              "
            />
            <div
              v-show="$route.params.type == 'person'"
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
              <h5 class="card-title text-danger home-link fs-2">
                {{ movie.title }}
              </h5>
              <h5 class="card-title text-danger home-link fs-2">
                {{ movie.name }}
              </h5>
              <p
                v-show="$route.params.type != 'person'"
                class="card-title text-light home-link fs-4"
              >
                {{ movie.tagline }}
              </p>
              <p
                v-show="$route.params.type == 'person'"
                class="card-title text-light home-link fs-4"
              >
                {{ movie.known_for_department }}
              </p>
              <span
                v-show="$route.params.type != 'person'"
                class="badge bg-info mx-1 my-2 text-dark"
                :key="p.id"
                v-for="p in movie.genres ?? []"
              >
                {{ p.name }}
              </span>
              <p
                v-show="$route.params.type != 'person'"
                class="text-light first-letter-capitalize"
              >
                <b>{{ $t("review") }}:</b>
                <Reviews
                  :model-value="movie.vote_average"
                  :fullIcon="'fa-star'"
                  :halfIcon="'fa-star-half-alt'"
                  :emptyIcon="'fa-star'"
                  :color="'text-warning'"
                  :review-or-popularity="'review'"
                  readOnly
                ></Reviews>

                ({{ Math.round((movie.vote_average / 2) * 10) / 10 }})
              </p>
              <p
                v-show="$route.params.type != 'person'"
                class="text-light first-letter-capitalize"
              >
                <b>{{ $t("number-of-reviews") }}:</b> {{ movie.vote_count }}
              </p>
              <p
                v-show="$route.params.type != 'person'"
                class="text-light first-letter-capitalize"
              >
                <b>{{ $t("popularity") }}: </b>
                <Reviews
                  :model-value="movie.popularity"
                  :fullIcon="'fa-heart'"
                  :halfIcon="'fa-heart-broken'"
                  :emptyIcon="'fa-heart'"
                  :color="'text-danger'"
                  :review-or-popularity="'popularity'"
                  readOnly
                ></Reviews>

                ({{ Math.round((movie.popularity / 1000) * 10) / 10 }})
              </p>
              <p
                v-show="$route.params.type != 'person'"
                class="text-light first-letter-capitalize"
              >
                <b>{{ $t("description") }}: </b>
                <br />
                {{ movie.overview }}
              </p>
              <p
                v-show="$route.params.type == 'person'"
                class="text-light first-letter-capitalize"
              >
                <b>{{ $t("biography") }}: </b>
                <br />
                {{ movie.biography }}
              </p>
              <p
                v-show="$route.params.type !== 'person'"
                class="text-light first-letter-capitalize"
              >
                <b>{{ $t("status") }}:</b> {{ movie.status }}
              </p>
              <p class="text-light first-letter-capitalize">
                <b v-if="$route.params.type === 'person'">
                  {{ $t("birthday") }}:
                </b>
                <b v-else>{{ $t("release-date") }}: </b>
                {{ formatterService.formatDate(movie) }}
              </p>
              <p
                v-if="$route.params.type === 'person'"
                class="text-light first-letter-capitalize"
              >
                <b>{{ $t("place-of-birth") }} </b>
                {{ movie.place_of_birth }}
              </p>
              <p
                v-show="$route.params.type != 'person'"
                class="text-light first-letter-capitalize"
              >
                <b>{{ $t("original-language") }}: </b>
                {{ language(movie.original_language) }}
              </p>
              <br />
              <br />
              <a
                v-show="$route.params.type != 'person'"
                :href="movie.homepage"
                target="_blank"
                ><button
                  type="button"
                  class="btn btn-outline-warning text-light"
                >
                  <b v-show="$route.params.type != 'person'">{{
                    $t("watch-now")
                  }}</b>
                  <b v-show="$route.params.type == 'person'">{{
                    $t("website")
                  }}</b>
                </button>
                <br />
              </a>
              <div v-if="currentReview == null">
                <p class="mt-3 text-light">
                  {{ $t("rate-this-film") }} :
                  <Reviews
                    v-model="dataRate"
                    :fullIcon="'fa-star'"
                    :emptyIcon="'fa-star'"
                    :color="'text-warning'"
                    :review-or-popularity="'review'"
                    @click="submitReview"
                  ></Reviews>
                </p>
                <p class="text-light" v-if="!isUserLogged">
                  {{ $t("to-vote-you-must") }}
                  <a
                    @click="doLogin"
                    class="text-primary"
                    style="cursor: pointer"
                    >{{ $t("log-in") }}</a
                  >
                </p>
              </div>
              <div v-else>
                <p class="text-light mt-3">
                  {{ $t("your-vote") }}
                  <Reviews
                    v-model="currentReview.rating"
                    :fullIcon="'fa-star'"
                    :emptyIcon="'fa-star'"
                    :color="'text-warning'"
                    :review-or-popularity="'review'"
                    @click="submitReview"
                  />
                </p>
                <p
                  class="text-danger"
                  style="cursor: pointer"
                  @click="deleteReview"
                >
                  {{ $t("delete-vote") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Carousel
      v-show="$route.params.type != 'person'"
      :similarList="similarList"
      :type="$route.params.type"
    />
  </div>
</template>


<script>
import Reviews from "../components/Reviews.vue";
import Carousel from "../components/Carousel.vue";
import { languageService } from "../services/languageService";
import { formatterService } from "../services/formatterService";
import { apiService } from "../services/apiService";
import { registerService } from "../services/registerService";
import { reviewService } from "../services/ReviewService";

export default {
  name: "Details",
  components: {
    Reviews,
    Carousel,
  },
  data() {
    return {
      movie: {},
      movieList: [],
      similarList: [],
      dataRate: 0,
      formatterService,
      isUserLogged: registerService.isLogged,
      currentReview: null,
    };
  },
  methods: {
    submitReview() {
      apiService
        .postRate(this.$route.params.type, this.$route.params.id, this.dataRate)
        .then();
    },

    deleteReview() {
      apiService
        .deleteRate(
          this.$route.params.type,
          this.$route.params.id,
          this.dataRate
        )
        .then();
    },
    language(l) {
      return languageService.getLanguageById(l)?.name;
    },
    BindBgImage(poster) {
      return `background: url('https://image.tmdb.org/t/p/w500${poster}') no-repeat center center;`;
    },
    doLogin() {
      const redirectUrl = this.$router.resolve({
        name: "success",
      });

      apiService.doLogin(location.origin + redirectUrl.fullPath);
    },
    async callDati() {
      apiService
        .getDetail(this.$route.params.type, this.$route.params.id)
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
        if (this.isUserLogged) {
          this.currentReview = await reviewService.getSingleReview(
            this.$route.params.id,
            this.$route.params.type
          );
        }
      } else {
        this.similarList = this.movie.known_for;
      }
    },
  },
  mounted() {},
  watch: {
    "$route.params": {
      handler({ type, id } = {}) {
        if (!type || !id) return;
        this.dataRate = 0;
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