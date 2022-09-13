<template>
  <div
    class="grid items-center h-24 grid-cols-5 p-4 my-2  bg-cultured rounded-xl font-poppins"
  >
    <div class="p-2 bg-white rounded-xl justify-self-start">
      <div
        class="bg-center bg-no-repeat bg-contain w-14 h-14"
        :style="{ backgroundImage: 'url(' + item.image + ')' }"
      />
    </div>

    <div class="col-span-3 mx-2">
      <p class="w-full overflow-hidden text-sm truncate text-arsenic">
        {{ item.title }}
      </p>
      <div
        class="flex items-center justify-between w-20 h-8 px-2 mt-2 bg-white  rounded-xl"
      >
        <button class="text-lg text-mango-tango" @click="updatePiece()">
          -
        </button>
        <p>{{ piece }}</p>
        <button class="text-lg text-mango-tango" @click="updatePiece('add')">
          +
        </button>
      </div>
    </div>

    <p class="text-lg font-semibold justify-self-end text-yankees-blue">
      ${{ item.price * piece }}
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CardCart",

  data() {
    return {
      piece: 1,
    };
  },

  props: {
    itemId: {
      type: String,
    },
  },

  computed: {
    ...mapState(["cart"]),
    item: function () {
      return this.cart[this.itemId];
    },
  },

  methods: {
    updatePiece: function (type) {
      if (type === "add") {
        this.piece++;
      } else {
        this.piece === 1 ? (this.piece = 1) : this.piece--;
      }
      this.$store.commit("updatePiece", {
        id: +this.itemId,
        piece: this.piece,
      });
      this.$emit("updateTotalPrice");
    },
  },
};
</script>
