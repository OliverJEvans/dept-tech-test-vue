import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cities: [],
    pinnedResults: [],
  },
  mutations: {
    SET_CITIES(state, payload) {
      state.cities = payload
    },
    SET_PINNEDRESULT(state, payload) {
      state.pinnedResults = state.pinnedResults.push(payload);
    },
  },
  actions: {
    getCities({ commit }) {
      axios.get('https://api.openaq.org/v1/cities?country=GB')
        .then((response) => {
          commit('SET_CITIES', response.data.results);
        });
    }
  },
  modules: {
  }
})
