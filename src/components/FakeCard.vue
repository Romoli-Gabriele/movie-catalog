<template>
  <!-- <intersect
    @change="loadMoreEvent"
    @enter="onEnter"
    @leave="onLeave"
    v-if="!unmounted"
    :key="id"
    :threshold="[0, 0, 0, 0]"
  > -->
  <div class="card mx-auto my-5 bg-dark" style="max-width: 20rem" ref="loadMoreCards">
    <div class="card-body">
      <div
        class="avatar-placeholder placeholder bg-secondary rounded-circle"
      ></div>
      <div class="text-placeholder placeholder bg-danger w-75"></div>
      <div class="text-placeholder placeholder bg-danger w-50"></div>
      <div class="text-placeholder placeholder bg-danger w-75"></div>
      <div class="text-placeholder placeholder bg-danger w-100"></div>
      <div class="text-placeholder placeholder bg-danger w-100"></div>
    </div>
  </div>
  <!-- </intersect> -->
  <div v-for="i in 3" :key="i">
    <div class="card mx-auto my-5 bg-dark" style="max-width: 20rem">
      <div class="card-body">
        <div
          class="avatar-placeholder placeholder bg-secondary rounded-circle"
        ></div>
        <div class="text-placeholder placeholder bg-danger w-75"></div>
        <div class="text-placeholder placeholder bg-danger w-50"></div>
        <div class="text-placeholder placeholder bg-danger w-75"></div>
        <div class="text-placeholder placeholder bg-danger w-100"></div>
        <div class="text-placeholder placeholder bg-danger w-100"></div>
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

    const { stop } = useIntersectionObserver(loadMoreCards, ([{ isIntersecting }]) => {
      targetIsVisible.value = isIntersecting;
      isIntersecting && emit("loadMore");
    });

    return {
      stop,
      loadMoreCards,
      targetIsVisible,
    };
  },
  mounted() {
    // console.log("mounted");
    // window.pippo = this.$refs.intersect;
  },
  unmounted() {
    // console.log("unmounted");
    // this.unmounted = true;
  },

  components: {},
  data() {
    return {
      // rootElement: document.getElementById("app"),
      // isVisible: true,
      // firstRender: true,
      // unmounted: false,
    };
  },
  //  methods: {
  //     loadMoreEvent() {
  //       // eslint-disable-next-line no-debugger
  //       debugger;
  //       if (this.isVisible == true || this.firstRender == true) {
  //         this.$emit("loadMore");

  //         this.firstRender = false;
  //       }
  //     },
  //     onEnter() {
  //       // eslint-disable-next-line no-debugger
  //       debugger;
  //       this.isVisible = true;
  //     },
  //     onLeave() {
  //       // eslint-disable-next-line no-debugger
  //       debugger;
  //       this.isVisible = false;
  //     },
  //   },
};
</script> 



<style scoped>
.avatar-placeholder {
  float: left;
  width: 48px;
  height: 48px;
  margin-right: 12px;
  margin-bottom: 5px;
}

.text-placeholder {
  height: 8px;
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
