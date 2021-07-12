<template>
  <h1 class="titolo">404</h1>
  <h3 class="sottotitolo">PAGE NOT FOUND</h3>
  <p class="testo">The page you are looking for doesn't exist.</p>
  <router-link :to="{ name: 'Home' }">
    <button type="button" class="btn btn-outline-danger">Return home</button>
  </router-link>
</template>

<style scoped>
* {
  color: #dc3545;
}
.titolo {
  font-size: 150px;
  font-weight: bold;
}

.sottotitolo {
  font-size: 50px;
}
</style>

<script>
export default {
  methods: {
    image() {
      return this.movie.backdrop_path;
    },
  },
};
</script>