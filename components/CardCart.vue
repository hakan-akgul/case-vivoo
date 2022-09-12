<template>
  <div>
    <p>{{ cart[itemId] }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CardCart",

  props: {
    itemId: {
      type: Number,
    },
  },

  computed: {
    ...mapState(["cart"]),
  },
};
</script>
