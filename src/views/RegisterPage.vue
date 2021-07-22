<template>
  <h1 class="mt-5">Complimenti! ti sei registrato.</h1>
</template>

<script>
import { apiService } from "../services/apiService";
import { registerService } from "../services/registerService";
export default {
  mounted() {
    registerService.saveToken(this.$route.query.request_token);
    apiService.createNewSession();

    console.log(this.$route.params);
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #fff;
  text-shadow: 0 0 15px #dc3545, 0 0 35px #dc3545, 0 0 60px #dc3545,
    0 0 210px #dc3545;
}

.first-letter-capitalize::first-letter {
  text-transform: capitalize;
}
</style>