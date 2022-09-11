import { fetchItems } from "../utils"

export const state = () => ({
  products: [],
  categories: [],
  cart: [],
  selectedProduct: {}
})

export const getters = {
}

export const mutations = {
  updateProducts: (state, payload) => state.products = payload,
  updateCategories: (state, payload) => state.categories = payload,
  updateSelectedProduct: (state, payload) => state.selectedProduct = payload,
  updateCart: (state, payload) => {
    if (state.cart.includes(payload)) {
      return
    }
    state.cart.push(payload)
  }
}

export const actions = {
  getProducts: async (state) => { state.commit('updateProducts', await fetchItems('products')) },
  getCategories: async (state) => { state.commit('updateCategories', await fetchItems('products/categories')) }
}
