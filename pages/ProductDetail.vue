<template>
  <div>
    <nuxt-link to="/">back</nuxt-link>
    <nuxt-link to="Cart">cart</nuxt-link>

    <div
      class="w-full h-20 mt-8 mb-4 bg-center bg-no-repeat bg-contain"
      :style="{ backgroundImage: 'url(' + selectedProduct.image + ')' }"
    />
    <p>{{ selectedProduct.title }}</p>
    <p>{{ selectedProduct.price }}</p>
    <p>{{ selectedProduct.description }}</p>
    <p>Recommended for you</p>
    <nuxt-link to="/">See all</nuxt-link>
    <button @click="addToCart(selectedProduct.id)">+</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ProductDetail",

  computed: {
    ...mapState(["selectedProduct"]),
  },

  methods: {
    addToCart(id) {
      this.$store.commit("updateCart", id);
    },
  },
};
</script>
