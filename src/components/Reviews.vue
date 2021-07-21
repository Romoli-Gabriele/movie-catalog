<template>
  <div :class="color">
    <i
      :title="currentTitle"
      :data-bs-original-title="review"
      :key="item"
      v-for="(item, i) in calculateIcon"
      :class="item"
      @click="itemClick(i, true)"
      @mouseover="itemClick(i, false)"
    >
    </i>
    <p v-if="!readOnly" class="text-light">{{ review }}</p>
    
  </div>
</template>

<script>
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
      review: "",
      hasVoted: false,
    };
  },

  methods: {
    itemClick(i, hasVoted) {
      if (this.readOnly === false) {
        this.$emit("update:modelValue", (i + 1) * 2);
        this.calculateIcon;
        this.review = this.$t("reviews." + i);
        if (hasVoted) {
          this.hasVoted = true;
        }
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
    currentTitle() {
      let value = this.modelValue;
      if (this.reviewOrPopularity === "review") {
        return this.readOnly
          ? this.$t("reviews." + parseInt(value / 2 - 1))
          : "";
      } else if (value / 1000 - 1 > 4) {
        return this.readOnly ? this.$t("popular." + 4) : "";
      } else {
        return this.readOnly
          ? this.$t("popular." + parseInt(value / 1000 - 1))
          : "";
      }
    },
  },
};
</script>