import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import axios from 'axios'
import {languageService} from "./services/languageService"

const language = languageService.getCurrentLanguage() || 'en';
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers['Accept-Language'] = language;

createApp(App).use(router)
  .use(i18n)
  .mount('#app');