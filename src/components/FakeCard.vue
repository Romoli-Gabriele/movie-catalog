<template>
<div v-for="i in 4" :key="i">
  <intersect @enter="$emit('loadMore')">
    <div class="card mx-auto my-5 bg-dark" style="max-width: 20rem">
      <div class="card-body">
        <div class="avatar-placeholder placeholder bg-secondary rounded-circle"></div>
        <div class="text-placeholder placeholder bg-danger w-75"></div>
        <div class="text-placeholder placeholder bg-danger w-50"></div>
        <div class="text-placeholder placeholder bg-danger w-75"></div>
        <div class="text-placeholder placeholder bg-danger w-100"></div>
        <div class="text-placeholder placeholder bg-danger w-100"></div>
      </div>
    </div>
  </intersect>
</div>
</template>

<script>
import Intersect from "vue-intersect";

export default {
  components: { Intersect },
  data() {
    return {
      msg: "I will change",
    };
  },
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
