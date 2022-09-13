<template>
  <div id="cart" class="flex flex-col items-center">
    <div class="container relative h-screen p-4 pt-24">
      <div
        id="cart-buttons"
        class="absolute flex justify-between w-full pr-8 top-12"
      >
        <nuxt-link to="ProductDetail">
          <div
            class="w-12 h-12 p-4 transition-colors duration-500 rounded-full cursor-pointer  bg-cultured hover:bg-indigo-100"
          >
            <img src="assets/back.svg" alt="back" />
          </div>
        </nuxt-link>
        <nuxt-link to="/">
          <div
            class="w-12 h-12 pt-3 pl-3 transition-colors duration-500 rounded-full cursor-pointer  bg-cultured hover:bg-indigo-100"
          >
            <img src="assets/cancel.svg" alt="cart" />
          </div>
        </nuxt-link>
      </div>

      <p class="mb-4 text-2xl font-bold text-center text-yankees-blue">Cart</p>

      <CardCart
        v-for="(item, id, index) in cart"
        :key="index"
        :itemId="id"
        @updateTotalPrice="updateTotalPrice()"
      />

      <div class="mb-12">
        <p class="font-medium">Enter Promo Code</p>
        <div class="w-full p-4 my-4 bg-cultured rounded-xl">
          <input
            type="text"
            placeholder="Enter your promo code"
            class="w-full appearance-none  bg-cultured focus-visible:outline-none"
          />
        </div>
        <button
          class="w-full mt-4 transition-all duration-500 border-2  text-yankees-blue border-yankees-blue rounded-xl h-14 hover:bg-yankees-blue hover:text-white"
        >
          Apply
        </button>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <p class="text-arsenic">Total</p>
          <p class="text-lg font-semibold justify-self-end text-yankees-blue">
            ${{ totalPrice }}
          </p>
        </div>
        <button
          class="w-full mt-4 text-white transition-opacity duration-500  bg-yankees-blue rounded-xl h-14 hover:opacity-90"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Cart",
  data() {
    return {
      totalPrice: 0,
    };
  },

  computed: {
    ...mapState(["cart"]),
  },

  methods: {
    updateTotalPrice() {
      let total = 0;

      for (const item in this.cart) {
        if (Object.hasOwnProperty.call(this.cart, item)) {
          const element = this.cart[item];
          total += element.price * element.piece;
        }
      }

      this.totalPrice = Number.parseFloat(total).toFixed(2);
    },
  },

  mounted() {
    this.updateTotalPrice();
  },
};
</script>
