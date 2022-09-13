<template>
  <div class="flex flex-col items-center justify-center px-2 sm:px-8">
    <div class="container">
      <div id="search" class="flex mt-8">
        <div class="flex flex-1 px-4 py-2 bg-cultured rounded-2xl">
          <img src="assets/search.svg" alt="search" />
          <input
            class="h-6 ml-4 appearance-none  focus-visible:outline-none bg-cultured"
            type="text"
            placeholder="Search"
          />
        </div>

        <div class="w-10 h-10 p-3 ml-4 mr-5 rounded-full bg-cultured">
          <img src="assets/setting.svg" alt="setting" />
        </div>
      </div>

      <div class="mr-6">
        <div
          id="categories"
          class="my-4 overflow-x-scroll whitespace-nowrap scrollbar-hide"
        >
          <button
            class="px-4 py-2 mr-2 border-2 rounded-lg border-yankees-blue"
            :class="{ 'bg-yankees-blue text-white': activeCategory === '' }"
            @click="filterProducts('')"
          >
            All
          </button>
          <button
            class="px-4 py-2 mx-2 capitalize border-2 rounded-lg  border-yankees-blue"
            :class="{
              'bg-yankees-blue text-white': activeCategory === category,
            }"
            v-for="category in categories"
            :key="category"
            @click="filterProducts(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <div
        id="products-list"
        class="grid grid-cols-2 gap-2 mr-8  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center"
      >
        <CardProduct
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
