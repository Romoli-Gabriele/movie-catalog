<template>

    <div class="card mx-auto my-5 bg-dark" style="max-width: 20rem" ref="loadMoreCards">
      <div class="card-body">
        <div class="image-placeholder placeholder bg-secondary"></div>
        <div class="title-placeholder placeholder w-75 bg-danger"></div>
        <div
          class="
            review-popularity-description-placeholder
            placeholder
            w-50
            bg-danger
          "
        ></div>
        <div class="emoji-placeholder placeholder w-75 bg-danger"></div>
        <div
          class="
            review-popularity-description-placeholder
            placeholder
            w-50
            bg-danger
          "
        ></div>
        <div class="emoji-placeholder placeholder w-75 bg-danger"></div>
        <div
          class="
            review-popularity-description-placeholder
            placeholder
            w-50
            bg-danger
          "
        ></div>
        <div class="text-placeholder placeholder w-100 bg-danger"></div>
        <div class="text-placeholder placeholder w-100 bg-danger"></div>
        <div class="text-placeholder placeholder w-100 bg-danger"></div>
          <span class="button-placeholder placeholder ms-2 me-3 bg-danger"></span>
          <span class="button-placeholder placeholder ms-2 bg-danger"></span>
      </div>
    </div>

  <div v-for="i in 3" :key="i">
    <div class="card mx-auto my-5 bg-dark" style="max-width: 20rem">
      <div class="card-body">
        <div class="image-placeholder placeholder bg-secondary"></div>
        <div class="title-placeholder placeholder w-75 bg-danger"></div>
        <div
          class="
            review-popularity-description-placeholder
            placeholder
            w-50
            bg-danger
          "
        ></div>
        <div class="emoji-placeholder placeholder w-75 bg-danger"></div>
        <div
          class="
            review-popularity-description-placeholder
            placeholder
            w-50
            bg-danger
          "
        ></div>
        <div class="emoji-placeholder placeholder w-75 bg-danger"></div>
        <div
          class="
            review-popularity-description-placeholder
            placeholder
            w-50
            bg-danger
          "
        ></div>
        <div class="text-placeholder placeholder w-100 bg-danger"></div>
        <div class="text-placeholder placeholder w-100 bg-danger"></div>
        <div class="text-placeholder placeholder w-100 bg-danger"></div>
          <span class="button-placeholder placeholder ms-2 me-3 bg-danger"></span>
          <span class="button-placeholder placeholder ms-2 bg-danger"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

export default {
  emits: ["loadMore"],
  setup(_, { emit }) {
    const loadMoreCards = ref(null);
    const targetIsVisible = ref(false);

    const { stop } = useIntersectionObserver(
      loadMoreCards,
      ([{ isIntersecting }]) => {
        targetIsVisible.value = isIntersecting;
        isIntersecting && emit("loadMore");
      }
    );

    return {
      stop,
      loadMoreCards,
      targetIsVisible,
    };
  },

  components: {},
  data() {
    return {};
  },
};
</script> 



<style scoped>
.image-placeholder {
  width: 16rem;
  height: 20rem;
  margin-bottom: 10px;
}

.title-placeholder {
  height: 15px;
  margin-bottom: 15px;
}

.review-popularity-description-placeholder {
  height: 10px;
  margin-bottom: 5px;
}

.emoji-placeholder {
  height: 12px;
  margin-bottom: 10px;
}

.text-placeholder {
  height: 8px;
  margin-bottom: 5px;
}

.button-placeholder {
  float: left;
  height: 40px;
  width: 105px !important;
  margin-bottom: 5px;
}

.placeholder {
  display: inline-block;
  background-color: #b0c0c7;
  animation-name: shine;
  animation-duration: 2.4s;
  animation-iteration-count: infinite;
}

@keyframes shine {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.35;
  }
  100% {
    opacity: 1;
  }
}
</style>
