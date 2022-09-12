<template>
  <div>
    <CardCart v-for="(item, id, index) in cart" :key="index" :itemId="id" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Cart",

  computed: {
    ...mapState(["cart"]),
  },
};
</script>
