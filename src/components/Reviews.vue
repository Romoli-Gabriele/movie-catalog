<template>
  <div>
    <!-- return ((type == "movie") ? moviesGenres : tvGenres).find(x => x.id === id) -->

    <i
      :key="c"
      v-for="c in calculateFullIcon(value)"
      class="fas"
      :class="fullIcon + ' ' + color"
    ></i>
    <i v-show="mezzo" class="fas" :class="halfIcon + ' ' + color"></i>
    <i
      :key="o"
      v-for="o in calculateEmptyIcon(value)"
      class="far"
      :class="emptyIcon + ' ' + color"
    ></i>
  </div>
</template>

<script>
export default {
  name: "Reviews",

  props: {
    iconType: {
      type: Boolean,
      required: true,
    },
    fullIcon: {
      type: String,
      required: true,
    },
    halfIcon: {
      type: String,
      required: true,
    },
    emptyIcon: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      mezzo: false,
    };
  },
  methods: {
    calculateFullIcon(x) {
      if (this.iconType) {
        x /= 2;
      } else {
        x /= 1000;
      }
      Math.round(x * 10) / 10;
      if (x >= 5) {
        return 5;
      } else if (x - Math.trunc(x) >= 0.39 && x - Math.trunc(x) <= 0.61) {
        this.mezzo = true;
        return Math.trunc(x);
      } else {
        return Math.round(x);
      }
    },

    calculateEmptyIcon(x) {
      let y = this.calculateFullIcon(x);
      y = 5 - y;
      if (this.mezzo && y > 0) {
        y--;
      }

      return y;
    },
  },
};
</script>