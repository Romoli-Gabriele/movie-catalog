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
          <div class="col-4">
            <CarouselCard :movie="similarList[0]" :type="type"></CarouselCard>
          </div>
          <div class="col-4">
            <CarouselCard :movie="similarList[1]" :type="type"></CarouselCard>
          </div>
          <div class="col-4">
            <CarouselCard :movie="similarList[2]" :type="type"></CarouselCard>
          </div>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <div class="row">
          <div class="col-4">
            <CarouselCard :movie="similarList[3]" :type="type"></CarouselCard>
          </div>
          <div class="col-4">
            <CarouselCard :movie="similarList[4]" :type="type"></CarouselCard>
          </div>
          <div class="col-4">
            <CarouselCard :movie="similarList[5]" :type="type"></CarouselCard>
          </div>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <div class="row">
          <div class="col-4">
            <CarouselCard :movie="similarList[6]" :type="type"></CarouselCard>
          </div>
          <div class="col-4">
            <CarouselCard :movie="similarList[7]" :type="type"></CarouselCard>
          </div>
          <div class="col-4">
            <CarouselCard :movie="similarList[8]" :type="type"></CarouselCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselCard from "./CarouselCard.vue";
export default{
  name: "Carousel",
  components: {
    CarouselCard,
  },
  props: {
    similarList: {
      type: Array,
      required: true,
    },
  },
};
</script>
