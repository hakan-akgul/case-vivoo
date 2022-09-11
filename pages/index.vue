<template>
  <div>
    <CardProduct
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ProductsList",

  props: {},

  data() {
    return {};
  },

  computed: {
    ...mapState(["products"]),
  },

  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>
