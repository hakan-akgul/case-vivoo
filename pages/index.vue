<template>
  <div>
    <div id="search" class="flex mx-4 mt-8">
      <div class="flex flex-1 px-4 py-2 bg-cultured rounded-2xl">
        <img src="assets/search.svg" alt="search" />
        <input
          class="w-full h-6 ml-4 appearance-none  focus-visible:outline-none bg-cultured"
          type="text"
          placeholder="Search"
        />
      </div>

      <div class="w-10 h-10 p-3 ml-4 rounded-full bg-cultured">
        <img src="assets/setting.svg" alt="setting" />
      </div>
    </div>

    <div
      id="categories"
      class="w-full p-4 m-4 overflow-x-scroll whitespace-nowrap"
    >
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

    <div id="products-list" class="flex items-center justify-center w-full">
      <div class="flex flex-wrap w-96">
        <CardProduct
          class="m-2"
          :product="product"
          v-for="product in filteredProducts"
          :key="product.id"
        />
      </div>
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

  async mounted() {
    if (this.products.length === 0) {
      await this.$store.dispatch("getProducts");
    }
    if (this.categories.length === 0) {
      await this.$store.dispatch("getCategories");
    }
    this.filteredProducts = this.products;
  },
};
</script>
