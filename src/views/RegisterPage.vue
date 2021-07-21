<template>
  <h1 class="titolo">Complimenti! ti sei registrato.</h1>
  <!-- <router-link :to="{ name: 'Home' }">
    <button type="button" class="btn btn-outline-danger first-letter-capitalize">{{ $t('return-home')}}</button>
  </router-link> -->
</template>

<script>
import { apiService } from "../services/apiService";
import { registerService } from "../services/registerService";
export default {
  mounted() {
    registerService.saveToken(this.$route.query.request_token);
    apiService.createNewSession();
  },
};
</script>

<style scoped>
* {
  color: #dc3545;
}
.titolo {
  font-size: 150px;
  font-weight: bold;
}
.first-letter-capitalize::first-letter {
  text-transform: capitalize;
}
</style>