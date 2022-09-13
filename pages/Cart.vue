<template>
  <div id="cart" class="p-4">
    <CardCart
      v-for="(item, id, index) in cart"
      :key="index"
      :itemId="id"
      @updateTotalPrice="updateTotalPrice()"
    />
    <div>
      <p>Total</p>
      <p>{{ totalPrice }}</p>
    </div>
    <button class="text-white bg-yankees-blue rounded-xl">Checkout</button>
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
