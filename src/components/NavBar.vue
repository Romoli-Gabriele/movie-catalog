<template>
  <div>

    <!-- <nav id="nav">
        <router-link :to="{name: 'Home'}">ciao</router-link>
        <router-link :to="{name: 'Series'}">cd</router-link>
    </nav> -->
        
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
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
              <router-link
                @click="SwitchTo(true)"
                :to="{ name: 'Home' }"
                class="home-link nav-link no-border bg-dark text-light fs-2"
                >Film</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                @click="SwitchTo(false)"
                class="nav-link no-border bg-dark fs-2 text-light home-link"
                :to="{ name: 'Series' }"
                >Serie</router-link
              >
            </li>
          </ul>
          <form class="d-flex">
            <input
              v-if="mOs === true"
              class="form-control me-2 bg-dark text-light"
              type="search"
              placeholder="Search a movie"
              aria-label="Search"
            />
            <input
              v-else
              class="form-control me-2 bg-dark text-light"
              type="search"
              placeholder="Search a TV Series"
              aria-label="Search"
            />
            <button class="btn btn-outline-success submit-button" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

    <br />
    <br />
  </div>
</template>
<script>
export default {
  name: "NavBar",
  components: {},
  data() {
    return {
      mOs: true,
    };
  },
  methods: {
    SwitchTo(t) {
      this.mOs = t;
    },
  },
};
</script>
<style scoped>
.logo {
  font-size: 20mm;
  color:#fff;
}
.home-link {
  font-family: "Shadows Into Light", cursive;
  text-align: center;
  cursor: pointer;
}

.home-link:hover {
  color: #DC3545;
}

.form-control {
  border: 1px solid #fff;
  border-radius: 0;
  margin-right: 0px !important;
}

.form-control:focus {
  border: 1px solid #ffdd00;
  outline: none;
  box-shadow: none;
}

.submit-button {
  border-radius: 0;
  border-left: none;
}

.exact-active{
  color: red !important;
}
</style>
