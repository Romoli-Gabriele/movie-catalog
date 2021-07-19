<template>
  <div :class="color">
    <i
      data-bs-toggle="tooltip"
      :data-bs-original-title="$t('review')"
      :key="item"
      v-for="(item, i) in calculateIcon"
      :class="item"
      @click="itemClick(i)"
      @mouseover="itemClick(i)"
    >
    </i>
    <p class="text-light">{{review}}</p>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { Tooltip } from "bootstrap/dist/js/bootstrap.esm.min.js";

export default {
  name: "Reviews",
  emits: ["update:modelValue"],

  mounted() {
    Array.from(
      document.querySelectorAll('button[data-bs-toggle="tooltip"]')
    ).forEach((tooltipNode) => new Tooltip(tooltipNode));
  },

  props: {
    reviewOrPopularity: {
      type: String,
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
    modelValue: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      mezzo: false,
      review: "",
    };
  },

  methods: {
    itemClick(i) {
      if (this.readOnly === false) {
        this.$emit("update:modelValue", (i + 1) * 2);
        this.calculateIcon;
        this.review = this.$t("reviews." + i);
      }
    },
  },
  computed: {
    calculateIcon() {
      let value = this.modelValue;
      if (this.reviewOrPopularity === "review") {
        value /= 2;
      } else {
        value /= 1000;
      }
      const iconReviews = new Array(5).fill("far " + this.emptyIcon);
      var i = 0;
      while (i <= value - 1 && i < 5) {
        iconReviews[i] = "fas " + this.fullIcon;
        i++;
      }
      if (value % 1 >= 0.5) {
        const index = iconReviews.findIndex(
          (x) => x === "far " + this.emptyIcon
        );
        if (index > 0) {
          iconReviews[index] = "fas " + this.halfIcon;
        }
      }
      return iconReviews;
    },
  },
};
</script>