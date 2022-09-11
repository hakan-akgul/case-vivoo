import axios from "axios";

export const state = () => ({

  products: []

})

export const getters = {
}

export const mutations = {

  updateProducts: (state, payload) => (state.products = payload)

}

export const actions = {

  getProducts: async (state) => {
    const options = {
      url: '/api/products',
      headers: { SHOP_SK: '6mcMzol0XEyQlIjUFnLyxtrLoIdiqjiS' }
    }

    try {
      const response = await axios.request(options)
      state.commit('updateProducts', response.data)
    } catch (error) {
      alert(error)
    }
  }

}
