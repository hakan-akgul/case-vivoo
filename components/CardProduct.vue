<template>
  <div
    class="relative flex flex-col items-center p-4 m-2 overflow-hidden font-semibold  w-44 h-52 rounded-2xl bg-cultured font-poppins"
  >
    <div class="absolute p-2 bg-white rounded-full right-3 top-2">
      <img src="assets/heart.svg" alt="heart" />
    </div>
    <div
      class="w-full h-20 mt-8 mb-4 bg-center bg-no-repeat bg-contain"
      :style="{ backgroundImage: 'url(' + product.image + ')' }"
    />
    <p class="w-full h-8 overflow-hidden text-sm truncate text-yankees-blue">
      {{ product.title }}
    </p>

    <p class="w-full h-8 text-xs text-arsenic">${{ product.price }}</p>
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
    return {};
  },
};
</script>
