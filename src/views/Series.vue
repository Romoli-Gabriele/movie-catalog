<template>
 <br />
  <trending-cards :tipo="type" />
</template>
<script>
import TrendingCards from '../components/TrendingCards.vue';

export default {
  name: "Series",
  components: {
    TrendingCards
  },
  data(){
    return{
      type: "tv",
    }
  }
  
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
