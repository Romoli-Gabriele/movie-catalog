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
    "
  >
    <trending-card :movieList="movieList"></trending-card>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default {
  name: "home-page",
  props: {
    tipo: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      movieList: [],
      genresList: [],
    };
  },

  mounted() {
    if (this.tipo) {
      fetch(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=6f9286d54de4891ea7a5c91779e09786"
      )
        .then((response) => response.json())
        .then((data) => {
          this.movieList = data.results;
        });
    } else {
      fetch(
        "https://api.themoviedb.org/3/trending/tv/week?api_key=6f9286d54de4891ea7a5c91779e09786"
      )
        .then((response) => response.json())
        .then((data) => {
          this.movieList = data.results;
        });
    }
  },
};
</script>
<style scoped>
</style>
