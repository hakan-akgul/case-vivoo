<template>
  <div class="relative">
    <div
      class="absolute w-8 h-8 p-2 bg-white rounded-full right-4 top-4"
      @click="favorite = !favorite"
    >
      <img v-if="favorite" src="assets/heart-fill.svg" alt="heart-fill" />
      <img v-if="!favorite" src="assets/heart-empty.svg" alt="heart-empty" />
    </div>
    <div
      @click="goToDetail()"
      class="flex flex-col items-center p-4 m-2 overflow-hidden font-semibold  w-44 h-52 rounded-2xl bg-cultured hover:bg-indigo-100 font-poppins"
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
