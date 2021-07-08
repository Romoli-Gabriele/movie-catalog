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
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="4"
        aria-label="Slide 5"
      ></button>
    </div>
    <div class="carousel-inner container">
      <div
        v-for="k in Math.round(similarList.length / 3)"
        :key="k"
        class="carousel-item"
        data-bs-interval="4000"
      >
        <div class="row">
          <div v-for="f in 3" :key="f" class="col-4">
            <CarouselCard
              :movie="similarList[f + k * 2]"
              :type="type"
            ></CarouselCard>
          </div>
        </div>
      </div>
      <div class="carousel-item active" data-bs-interval="4000">
        <div class="row">
          <div v-for="l in 3" :key="l" class="col-4">
            <CarouselCard
              :movie="similarList[similarList.length - l]"
              :type="type"
            ></CarouselCard>
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
      default: new Array(),
    },
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      primo: true,
    };
  },
};
</script>
