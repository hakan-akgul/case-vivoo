<template>
  <div class="relative cursor-pointer">
    <div
      class="absolute w-8 h-8 pt-2 pl-1.75 bg-white rounded-full right-4 top-4 hover:bg-indigo-100 transition-color duration-500 "
      @click="favorite = !favorite"
    >
      <img v-if="favorite" src="assets/heart-fill.svg" alt="heart-fill" />
      <img v-if="!favorite" src="assets/heart-empty.svg" alt="heart-empty" />
    </div>

    <div
      @click="goToDetail()"
      class="flex flex-col items-center p-4 overflow-hidden font-semibold transition-colors duration-500  w-44 h-52 rounded-2xl bg-cultured hover:bg-indigo-100 font-poppins"
    >
      <div
        class="w-full h-20 mt-8 mb-4 bg-center bg-no-repeat bg-contain"
        :style="{ backgroundImage: 'url(' + product.image + ')' }"
      />

      <p class="w-full h-8 overflow-hidden text-sm truncate text-yankees-blue">
        {{ product.title }}
      </p>

      <p class="w-full h-8 text-xs text-arsenic">${{ product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      favorite: false,
    };
  },

  methods: {
    goToDetail() {
      this.$store.commit("updateSelectedProduct", this.product);
      this.$router.push("ProductDetail");
    },
  },
};
</script>
