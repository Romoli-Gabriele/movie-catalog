<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner container">
      <div class="carousel-item active" data-bs-interval="4000">
        <div class="row">
          <div v-for="f in 3" :key="f" class="col-4">
            <CarouselCard :movie="similarList[f]" :type="type"></CarouselCard>
          </div>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <div class="row">
          <div v-for="f in 3" :key="f" class="col-4">
            <CarouselCard :movie="similarList[f + 2]" :type="type"></CarouselCard>
          </div>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <div class="row">
          <div v-for="f in 3" :key="f" class="col-4">
            <CarouselCard :movie="similarList[f + 4]" :type="type"></CarouselCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselCard from "./CarouselCard.vue";
export default {
  name: "Carousel",
  components: {
    CarouselCard,
  },
  props: {
    similarList: {
      type: Array,
      default: new Array,
    },
    type:{
      type: String,
      required: true,
    }
  },
  
};
</script>
