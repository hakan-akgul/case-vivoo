<template>
  <div class="pt-20 bg-cultured">
    <div
      id="detail-buttons"
      class="absolute flex justify-between w-full px-8 top-12"
    >
      <nuxt-link to="/">
        <div class="w-10 h-10 pt-3 pl-3.5 bg-white rounded-full">
          <img src="assets/back.svg" alt="back" />
        </div>
      </nuxt-link>
      <nuxt-link to="Cart">
        <div class="w-10 h-10 pt-2.25 pl-2.25 bg-white rounded-full">
          <img src="assets/cart.svg" alt="cart" />
        </div>
      </nuxt-link>
    </div>

    <div
      id="detail-image"
      class="w-full mb-4 bg-center bg-no-repeat bg-contain h-36"
      :style="{ backgroundImage: 'url(' + selectedProduct.image + ')' }"
    />

    <div id="detail-colors" class="flex justify-center h-6 my-5">
      <div class="w-6 h-6 p-1.5 mx-2 rounded-full bg-detail-1">
        <img src="assets/check.svg" alt="check" />
      </div>
      <div class="w-6 h-6 mx-2 rounded-full bg-detail-2" />
      <div class="w-6 h-6 mx-2 rounded-full bg-detail-3" />
      <div class="w-6 h-6 mx-2 rounded-full bg-detail-4" />
    </div>

    <div class="p-8 bg-white rounded-tl-3xl rounded-tr-3xl font-poppins">
      <div class="">
        <button
          class="float-right h-10 p-2 ml-4 border-2 rounded-lg  w-28 border-yankees-blue"
        >
          Try virtual
        </button>
        <p class="mb-4 text-xl font-bold text-yankees-blue">
          {{ selectedProduct.title }}
        </p>
      </div>

      <p class="mb-4 text-xl font-semibold text-mango-tango">
        ${{ selectedProduct.price }}
      </p>

      <p class="mb-4 text-sm font-normal text-arsenic">
        {{ selectedProduct.description }}
      </p>

      <div class="flex items-center justify-between mb-4">
        <p class="font-semibold text-yankees-blue">Recommended for you</p>
        <nuxt-link class="text-sm text-arsenic" to="/">See all</nuxt-link>
      </div>

      <div class="flex w-full h-56 overflow-x-auto whitespace-nowrap">
        <CardProduct
          class="mr-4"
          :product="product"
          v-for="product in filteredProducts"
          :key="product.id"
        />
      </div>

      <div id="go-to-cart" class="flex mt-4">
        <button
          class="p-4 rounded-lg bg-yankees-blue w-13 h-13"
          @click="addToCart()"
        >
          <img src="assets/plus.svg" alt="plus" />
        </button>
        <button class="w-full ml-6 text-white rounded-lg bg-mango-tango h-13">
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ProductDetail",

  computed: {
    ...mapState(["selectedProduct", "products"]),

    filteredProducts: function () {
      const filtered = this.products.filter((product) => {
        return product.category == this.selectedProduct.category;
      });
      return filtered;
    },
  },

  methods: {
    addToCart(id) {
      this.$store.commit("updateCart", this.selectedProduct.id);
    },
  },
};
</script>
