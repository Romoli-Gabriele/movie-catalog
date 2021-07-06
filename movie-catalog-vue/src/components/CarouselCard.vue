<template>
  <div class="card bg-dark mb-5">
    <img
      :src="'https://image.tmdb.org/t/p/w300/' + movie.backdrop_path"
      alt="movie banner"
    />
    <div class="card-body">
      <h5 class="card-title text-danger home-link fs-3">{{ movie.title }}</h5>
      <p class="card-text text-light home-link fs-4">{{ movie.tagline }}</p>
      <p class="card-text text-light container">
        <b>Description: </b>
        <br />
      </p>

      <p v-show="this.collapse">{{ description(movie.overview) }} ...</p>
      <p v-show="this.collapse == false">{{ movie.overview }}</p>
      <button
        v-show="this.collapse"
        class="btn btn-outline-success no-border text-light me-4"
        style="display: inline"
        @click="this.show"
      >
        Show more
      </button>
      <button
        v-show="this.collapse == false"
        class="btn btn-outline-success no-border text-light me-4"
        style="display: inline"
        @click="this.show"
      >
        Show less
      </button>
      <a :href="this.creaLink(movie)" class="mostra-dettagli-button">
        <button type="button" class="btn btn-outline-info">Details</button>
      </a>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  name: CarouselCard,
  props: {
    type: {
      type: String,
      required: true,
    },
    movie: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      collapse: true,
    };
  },
  methods: {
    creaLink() {
      return "./Details.html?id=" + this.movie.id + "&type=" + this.type;
    },
    description(s) {
      var r = s.slice(0, 70);

      return r;
    },
    show() {
      if (this.collapse) {
        this.collapse = false;
      } else {
        this.collapse = true;
      }
    },
  },
});
</script>


<style scoped>
</style>