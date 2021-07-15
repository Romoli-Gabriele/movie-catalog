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
                class="
                  nav-link
                  fs-2
                  text-light
                  home-link
                  first-letter-capitalize
                "
                :to="{ name: 'Series' }"
                >{{ $t("TV-series") }}</router-link
              >
            </li>
          </ul>

          <div class="me-4">
            <select
              class="btn btn-secondary"
              v-model="language"
              @change="handleChange($event)"
              style="padding-right: 0px"
            >
              <option value="en">English</option>
              <option v-show="filtra('it')" value="it">Italiano</option>
              <option v-show="filtra('de')" value="de">Deutsche</option>
            </select>
          </div>

          <div class="d-flex">
            <input
              id="param"
              class="
                form-control
                me-2
                bg-dark
                text-light
                first-letter-capitalize
              "
              type="search"
              :placeholder="$t('search')"
              aria-label="Search"
            />

            <select
              type="search"
              data-live-search="true"
              v-model="selectedItem"
              @change="navigateTo"
            >
              <option
                v-for="movieOSerie in searchList"
                :key="movieOSerie.id"
                :value="movieOSerie"
              >
                {{ movieOSerie.title }}
                {{ movieOSerie.name }}
              </option>
            </select>

            <button
              class="btn btn-outline-success submit-button"
              @click="cerca()"
              type="submit"
            >
              {{ $t("search") }}
            </button>
          </div>
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
import { apiService } from "../services/apiService";
import { languageService } from "../services/languageService";

export default {
  name: "NavBar",
  components: {},
  data() {
    const language = languageService.getCurrentLanguage() || "en";
    return {
      language: language,
      searchList: [],
      selectedItem: null,
    };
  },
  methods: {
    cerca() {
      apiService
        .getSearch(document.getElementById("param").value)
        .then((data) => {
          this.searchList = data.results;
        });
    },
    navigateTo() {
      this.$router.push({
        name: "Details",
        params: {
          id: this.selectedItem.id,
          type: this.selectedItem.media_type,
        },
      });
      // this.reloadDetailPage()
    },
    // reloadDetailPage(){
    //   setTimeout(function(){
    //     location.reload()
    //   },1)
    // },
    filtra(iso) {
      for (let index = 0; index < navigator.languages.length; index++) {
        if (navigator.languages[index] == iso) {
          return true;
        }
      }
      return false;
    },
    SwitchTo(t) {
      this.mOs = t;
    },
    handleChange(event) {
      languageService.setCurrentLanguage(event.target.value); //prima c'era lingua al posto di lingua.target.value
      window.location.reload();
    },
  },
  mounted() {

    if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1) {
      document.onkeyup = (e) => {
        if (e.ctrlKey && e.which == 75) {
          window.document.getElementById("param").focus();
        }
      };
    } else if (window.navigator.userAgent.indexOf("Mac") != -1) {
    document.onkeyup = (e) => {
      if (e.metaKey && e.which == 75) {
        alert("funziona");
      }
    };
    }
  },
};
</script>
<style>
.title {
  font-family: "Yellowtail", cursive;
  margin-right: 9mm;
  font-size: 17mm;
}
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

.first-letter-capitalize::first-letter {
  text-transform: capitalize;
}
</style>
