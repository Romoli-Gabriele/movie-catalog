<template>
  <div v-for="movie in movielist" :key="movie.id">
    <Card :movie="movie"></Card>
  </div>
  <FakeCard @load-more="loadMoreContent()"></FakeCard>
  <!-- <div>
    <div
      class="
        row
        row-cols-xs-1
        row-cols-sm-1
        row-cols-md-1
        row-cols-lg-2
        row-cols-xl-4
        row-cols-xxl-5
        mx-3
      "
    >
      <div
        v-show="dOrL"
        :key="movie.id"
        v-for="movie in movieList"
        class="py-0"
      >
        <Card :movie="movie"></Card>
      </div>
    </div>
  </div> -->
</template>

<script>
import Card from "./Card.vue";
import { apiService } from "../services/apiService";
import FakeCard from "../components/FakeCard.vue"

export default {
  name: "TrendingCards",
  components: {
    Card,
    FakeCard,
  },
  props: {
    tipo: {
      type: String,
      default: "movie",
    },
  },
  data() {
    return {
      page: 0,
      movieList: [],
    };
  },

  methods: {
    loadMoreContent() {
      this.page++;

      apiService.getMovieFetch(this.tipo, this.page).then((data) => {
        this.movieList.concat(data.results);
      });
    },
  },

};
</script>

<style scoped>
.home-link {
  font-family: "Shadows Into Light", cursive;
  text-align: center;
}
</style>
