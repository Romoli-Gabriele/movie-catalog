<template>
  <div>
    <TrendingCards :movieList="movieList" />
  </div>
</template>

<script>
import TrendingCards from "../components/TrendingCards.vue";

export default {
  name: "HomePage",
  components: {
    TrendingCards,
  },
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

  created() {
    // eslint-disable-next-line no-debugger
      debugger
    if (this.tipo) {
      fetch(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=6f9286d54de4891ea7a5c91779e09786"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
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
