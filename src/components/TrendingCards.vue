<template>
  <div class="scrolling-component" ref="scrollComponent"></div>

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

export default {
  name: "TrendingCards",
  components: {
    Card,
  },

  data() {
    return {
      dOrL: true,
    };
  },

  methods: {
    /*
    Dettagli(movie) {
      if (this.dOrL) {
        this.dOrL = false;
        this.type = movie.media_type;
        this.id = movie.id;
      } else {
        this.dOrL = true;
      }
    },*/
  },
};
</script>

<style scoped>
.home-link {
  font-family: "Shadows Into Light", cursive;
  text-align: center;
}
</style>
