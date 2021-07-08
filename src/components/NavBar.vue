<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <i class="fas fa-film logo"></i>
        </a>
        <h1 class="title fs-1 text-danger" href="#">Movie Catalog</h1>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" active-class="" class="home-link nav-link no-border bg-dark text-light fs-2"
                @click="switchTipo(true)">Film</router-link>

            </li>
            <li class="nav-item">
              <router-link to="/" active-class="" class="home-link nav-link no-border bg-dark text-light fs-2"
                @click="switchTipo(false)">Serie</router-link>
            </li>
            <a
              class="nav-link disabled home-link fs-2 text-warning"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Work in Progress</a
            >
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <br />
    <br />
    <div class="mx-4">
      <HomePage v-show="mOs" :tipo="true" />
      <HomePage v-show="mOs == false" :tipo="false" />
    </div>
  </div>
</template>
<script>
import HomePage from "../views/HomePage.vue";

export default {
  name: "NavBar",
  components: {
    HomePage,
  },
  data(){
    return{
      mOs: true,
    }
  },
  methods: {
    switchTipo(t) {
      
      if (t) {
        this.mOs = true;
      } else {
        this.mOs = false;
      }
      
    },
  },
};
</script>
<style scoped>
.logo {
  font-size: 20mm;
}
.home-link {
  font-family: "Shadows Into Light", cursive;
  text-align: center;
  cursor: pointer;
}

.home-link:hover{
  color: #ff0000;
}

</style>
