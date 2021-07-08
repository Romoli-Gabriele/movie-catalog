<template>
  <NavBar />
  <br />
  <HomePage :tipo="true" />
  
</template>
<script>
import HomePage from "../components/HomePage.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "Home",
  components: {
    HomePage,
    NavBar,
  }
  }
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
