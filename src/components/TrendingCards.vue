<template>
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
  <div v-for="movie in movieList" :key="movie.id">
    <Card :movie="movie"></Card>
  </div>
  <FakeCard @load-more="loadMoreContent()">
    
  </FakeCard>
  </div>
</template>

<script>
import Card from "./Card.vue";
import { apiService } from "../services/apiService";
import FakeCard from "../components/FakeCard.vue";

export default {
  name: "TrendingCards",
  components: {
    Card,
    FakeCard,
  },
  props: {
    tipo: {
      type: String,
      required: true,
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
        this.movieList = [...this.movieList, ...data.results];
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
