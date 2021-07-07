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
          <div v-for="f in c1" :key="f.id" class="col-4">
            <CarouselCard :movie="f" :type="type"></CarouselCard>
          </div>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <div class="row">
          <div v-for="y in c2" :key="y.id" class="col-4">
            <CarouselCard :movie="y" :type="type"></CarouselCard>
          </div>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <div class="row">
          <div v-for="n in c3" :key="n.id" class="col-4">
            <CarouselCard :movie="n" :type="type"></CarouselCard>
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
      default: () => ([{},{},{},{},{},{},{},{},{}]),
    },
  },
  computed:{

  }
};
</script>
