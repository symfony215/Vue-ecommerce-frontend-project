import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  state: {
    navLinks: [
      { title: 'Товары', url: '/products' },
      { title: 'Блог', url: '/blog' }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getNavLinks (state) {
      return state.navLinks
    }
  }
}