<template>
  <div class="card bg-dark mb-5">
    <img
      :src="'https://image.tmdb.org/t/p/w300/' + movie.backdrop_path"
      alt="movie banner"
    />
    <div class="card-body">
      <h5 class="card-title text-danger home-link fs-3">{{ movie.title }}</h5>
      <p class="card-text text-light home-link fs-4">{{ movie.tagline }}</p>
      <p class="card-text text-light container">
        <b>Description: </b>
        <br />
      </p>

      <p v-show="collapse">{{ description(movie.overview) }} ...</p>
      <p v-show="collapse == false">{{ movie.overview }}</p>
      <button
        v-show="collapse"
        class="btn btn-outline-success no-border text-light me-4"
        style="display: inline"
        @click="show"
      >
        Show more
      </button>
      <button
        v-show="collapse == false"
        class="btn btn-outline-success no-border text-light me-4"
        style="display: inline"
        @click="show"
      >
        Show less
      </button>
      <router-link :to="{ name: 'Details', params: { id: movie.id, type: $route.params.type} }" target="_blank">
                        <button type="button"  class="btn btn-outline-info">
                        Details
                        </button>
                        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselCard",
  props: {
    type: {
      type: String,
      default: "",
    },
    movie: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      collapse: true,
    };
  },
  methods: {
   
    description(s = "") {
      var r = s.slice(0, 70);

      return r;
    },
    show() {
      if (this.collapse) {
        this.collapse = false;
      } else {
        this.collapse = true;
      }
    },
  },

  
};
</script>


<style scoped>
.home-link{
    font-family: 'Shadows Into Light', cursive;
    text-align: center;
}
body{
    background-color: black;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
}
.home-img{
    height: 3cm;
    width: 2cm;
}
.home-div{
    margin: 1cm;
}
.no-border{
    border: solid, gray, 2px;
}
.title{
    font-family: 'Yellowtail', cursive; margin-right: 9mm;
    font-size: 17mm;
}
.marg{
    margin-top: 5mm;
    
}

.ali-r{
    text-align: right;
}


.mostra-dettagli-button{
    text-decoration: none;
    color: #fff;
}

.mostra-dettagli-button:hover{
    color: #fff;
}
.mar-l{
    margin-left: 10mm;
}

</style>