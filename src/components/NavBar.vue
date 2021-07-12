<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <i class="fas fa-film logo"></i>
        </a>
        <router-link
          class="navbar-brand title fs-1 text-danger"
          :to="{ name: 'Home' }"
          >Movie Catalog</router-link
        >
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
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link
                @click="SwitchTo(true)"
                :to="{ name: 'Home' }"
                class="home-link nav-link text-light fs-2"
                >Film</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                @click="SwitchTo(false)"
                class="nav-link fs-2 text-light home-link"
                :to="{ name: 'Series' }"
                >Serie TV</router-link
              >
            </li>
          </ul>

          <div class="dropdown me-4">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Seleziona lingua
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" @click="cambioLingua('en')">Inglese</a></li>
              <li><a class="dropdown-item" @click="cambioLingua('it')">Italiano</a></li>
            </ul>
          </div>

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
    <br />
    <br />
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
    cambioLingua(lingua) {
      localStorage.setItem("language", lingua);
      window.location.reload();
      console.log(lingua);
    },
  },
};
</script>
<style>
.logo {
  font-size: 20mm;
  color: #fff;
}
.home-link {
  font-family: "Shadows Into Light", cursive;
  text-align: center;
  cursor: pointer;
}

.home-link:hover {
  color: #dc3545;
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

.exact-active {
  color: #dc3545 !important;
}
</style>
