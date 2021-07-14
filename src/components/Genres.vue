<template>
  <span
    class="badge bg-info mx-1 my-2 text-dark"
    :key="p.id"
    v-for="p in movieG"
  >
    {{ convertGenres(p) }}
  </span>
</template>

<script>
import { genreService } from "../services/genreService";
export default {
  name: "Genres",
  props: {
    type: {
      type: String,
    },
    movieG: {
      type: Array,
      required: true,
    },
  },
  methods: {
    convertGenres(p) {
      return genreService.getGenre(this.type, p)?.name;
    },
  },
};
</script>
