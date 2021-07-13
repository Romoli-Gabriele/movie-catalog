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
                class="nav-link fs-2 text-light home-link first-letter-capitalize"
                :to="{ name: 'Series' }"
                >{{ $t('TV-series')}}</router-link
              >
            </li>
          </ul>

          <div class="me-4">
            <select
              class="bg-secondary"
              v-model="language"
              @change="handleChange($event)"
            >
              <option value="en">English</option>
              <option value="it">Italiano</option>
              <option value="de">Deutsche</option>
            </select>
          
          </div>

          <form class="d-flex">
            <input
              v-if="mOs === true"
              class="form-control me-2 bg-dark text-light first-letter-capitalize"
              type="search"
              :placeholder="$t('search-a-movie')"
              aria-label="Search"
            />
            <input
              v-else
              class="form-control me-2 bg-dark text-light first-letter-capitalize"
              type="search"
              :placeholder="$t('search-a-TV-series')"
              aria-label="Search"
            />
            <button class="btn btn-outline-success submit-button" type="submit">
              {{ $t('search')}}
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
    const language = localStorage.getItem('language') || 'en';
    return {
      mOs: true,
      language: language

    };
  },
  methods: {
    SwitchTo(t) {
      this.mOs = t;
    },
    handleChange(event) {
      localStorage.setItem("language", event.target.value); //prima c'era lingua al posto di lingua.target.value
      window.location.reload();
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

.first-letter-capitalize::first-letter{
  text-transform: capitalize;
}
</style>
