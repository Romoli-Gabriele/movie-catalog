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
              class="btn btn-secondary select-language-button"
              v-model="language"
              @change="handleChange($event)"
            >
              <option value="en">English</option>
              <option v-show="filtra('it')" value="it">Italiano</option>
              <option v-show="filtra('de')" value="de">Deutsche</option>
            </select>
          </div>

          <Multiselect
            id="param"
            v-model="selectedSearch"
            :filterResults="false"
            :minChars="3"
            :resolveOnLoad="false"
            :delay="0"
            :searchable="true"
            :max="1"
            :limit="5"
            :options="getMovies"
            @change="navigateTo"
            :placeholder="$t('search') + ctrlOrCmd()"
            ref="multiselect"
            class="text-start"
          >
            <template v-slot:option="{ option }" @change="navigateTo(option)">
              <img class="character-option-icon" :src="option.icon" />
              {{ option.name }}
            </template>
          </Multiselect>

          <button
            class="btn btn-outline-success submit-button"
            @click="cerca()"
            type="submit"
          >
            {{ $t("search") }}
          </button>
        </div>
      </div>
      <div v-if="!getAvatarPath() && registerService.isLogged" class="userWithoutAvatar me-3">
        <p class="text-light mt-1">{{ getFirstLetter() }}</p>
      </div>
      <div v-else v-show="accountDetails && registerService.isLogged" class="d-none d-lg-block">
        <span
          class="d-inline-block"
          tabindex="0"
          data-bs-toggle="popover"
          data-bs-trigger="focus"
          :title="currentName ? currentName : currentUsername"
          :data-bs-content="$t('language') + ': ' + currentLanguage"
        >
          <img
            :src="
              'https://www.themoviedb.org/t/p/w50_and_h50_face/' +
              getAvatarPath()
            "
            style="border-radius: 100%"
            class="me-3"
          />
        </span>
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
import Multiselect from "@vueform/multiselect";
import { apiService } from "../services/apiService";
import { languageService } from "../services/languageService";
import { accountService } from "../services/accountService";
import { registerService } from "../services/registerService";
import { Popover } from "bootstrap";

export default {
  name: "NavBar",
  components: { Multiselect },
  data() {
    const language = languageService.getCurrentLanguage() || "en";
    return {
      language: language,
      searchList: [],
      selectedItem: null,
      selectedSearch: null,
      accountDetails: null,
    };
  },

  methods: {
    ctrlOrCmd() {
      if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1)
        return "  (ctrl + k)";
      if (window.navigator.userAgent.indexOf("Mac") != -1) return "  (cmd + k)";
    },
    cerca() {
      apiService
        .getSearch(document.getElementById("param").value)
        .then((data) => {
          this.searchList = data.results;
        });
    },
    getAvatarPath() {
      return accountService.getUserImage() ?? "";
    },
    getUsername() {
      return accountService.getAccountUsername();
    },
    getFirstLetter() {
      console.log(this.currentName.charAt(0));
      return this.currentName
        ? this.currentName.charAt(0)
        : this.currentUsername.charAt(0);
    },
    getLogoutText() {
      return `{{$t('log-out')}}`;
    },
    navigateTo(item) {
      if (item) {
        this.selectedItem = item;
        this.$router.push({
          name: "Details",
          params: {
            id: item.id,
            type: item.type,
          },
        });
      }
    },

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
    getMovies(search) {
      return apiService.getSearch(search).then((data) => {
        return data.results.map((item) => ({
          name: item.title || item.name,
          label: item.title || item.name,
          value: {
            id: item.id,
            type: item.media_type,
            name: item.title || item.name,
          },
          icon: "https://image.tmdb.org/t/p/original/" + item.poster_path,
        }));
      });
    },
  },
  mounted() {
    registerService.isLogged ?
        apiService
      .saveAccountDetails()
      .then((data) => (this.accountDetails = data)) : "";

    if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1) {
      document.onkeydown = (e) => {
        if (e.ctrlKey && e.which == 75) {
          e.preventDefault();
          window.document.getElementById("param").focus();
        }
      };
    } else if (window.navigator.userAgent.indexOf("Mac") != -1) {
      document.onkeydown = (e) => {
        if (e.metaKey && e.which == 75) {
          window.document.getElementById("param").focus();
        }
      };
    }
  },
  watch: {
    accountDetails: {
      handler() {
        this.$nextTick(() => {
          [...document.querySelectorAll('[data-bs-toggle="popover"]')].map(
            (el) => new Popover(el)
          );
        });
      },
      deep: true,
    },
  },
  computed: {
    currentUsername() {
      return this.accountDetails?.username ?? "";
    },
    currentName() {
      return this.accountDetails?.name ?? "";
    },
    currentLanguage() {
      return this.accountDetails?.iso_639_1 ?? "";
    },
  },
};
</script>
<style>
.userWithoutAvatar {
  background-color: #6c757d;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  font-size: 30px;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
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
  border-radius: 0px !important;
  border-left: none;
  margin-top: 10px;
  height: 40px;
  margin-bottom: 2px;
}
.exact-active {
  color: #dc3545 !important;
}

.first-letter-capitalize::first-letter {
  text-transform: capitalize;
}

ul.multiselect-options {
  color: #fff;
  background-color: #212529;
  list-style-type: none;
  text-align: left;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  width: 300px;
}

input.multiselect-search {
  background-color: #212529;
  color: #fff;
  border: 1px solid #fff;
  height: 40px;
  min-width: 300px;
}

.character-option-icon {
  float: left;
  width: 20px;
  height: 20px;
}

div.multiselect-placeholder,
div.multiselect-single-label {
  margin-top: -32px;
  font-size: 16px;
  color: white;
  margin-left: 10px;
}

.is-selected {
  background-color: #dc3545;
}

.is-pointed {
  -webkit-box-shadow: 4px 4px 12px -1px rgba(0, 0, 0, 0.8);
  box-shadow: 4px 4px 12px -1px rgba(0, 0, 0, 0.8);
}

.select-language-button {
  margin-top: 10px;
  padding-right: 0px;
}
</style>