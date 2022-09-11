<template>
  <div>
    <div class="w-full p-4 m-4 overflow-x-scroll whitespace-nowrap">
      <button
        class="px-4 py-2 mx-2 border-2 rounded-lg border-yankees-blue"
        :class="{ 'bg-yankees-blue text-white': activeCategory === '' }"
        @click="filterProducts('')"
      >
        All
      </button>
      <button
        class="px-4 py-2 mx-2 capitalize border-2 rounded-lg  border-yankees-blue"
        :class="{ 'bg-yankees-blue text-white': activeCategory === category }"
        v-for="category in categories"
        :key="category"
        @click="filterProducts(category)"
      >
        {{ category }}
      </button>
    </div>
    <div
      id="products-list"
      class="flex flex-wrap items-center justify-center w-full"
    >
      <CardProduct
        :product="product"
        v-for="product in filteredProducts"
        :key="product.id"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ProductsList",

  data() {
    return {
      filteredProducts: [],
      activeCategory: "",
    };
  },

  computed: {
    ...mapState(["products", "categories"]),
  },

  methods: {
    filterProducts(category) {
      if (category === "") {
        this.filteredProducts = this.products;
      } else {
        this.filteredProducts = this.products.filter((product) => {
          return product.category == category;
        });
      }
      this.activeCategory = category;
    },
  },
  watch: {
    products: function (newValue, oldValue) {
      this.filteredProducts = this.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getCategories");
  },
};
</script>
