import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cities: [],
    pinnedResults: [],
    searchedCity: '',
  },
  getters: {
    filteredCities(state) {
      return state.cities.filter(city => city.name.toUpperCase().includes(state.searchedCity.toUpperCase()));
    }
  },
  mutations: {
    SET_CITIES(state, payload) {
      state.cities = payload;
    },
    SET_PINNED_RESULT(state, payload) {
      state.pinnedResults.push(payload);
    },
    SET_SEARCHED_CITY(state, payload) {
      state.searchedCity = payload;
    },
    REMOVE_PINNED_RESULT(state, payload) {
      const index = state.pinnedResults.indexOf(payload);
      state.pinnedResults.splice(index, 1);
    }
  },
  actions: {
    getCities({ commit }) {
      axios.get('https://api.openaq.org/v1/cities?country=GB')
        .then((response) => {
          commit('SET_CITIES', response.data.results);
        });
    },
    setSearchedCity({ commit }, value) {
      commit('SET_SEARCHED_CITY', value);
    },
    pinCity({ commit }, value) {
      axios.get(`https://api.openaq.org/v1/latest?country=GB&city=${value.name}&order_by=date&sort=desc`)
        .then((response) => {
          const mostRecent = response.data.results[0];
          commit('SET_PINNED_RESULT', mostRecent)
        });
    },
    unPinResult({ commit }, value) {
      commit('REMOVE_PINNED_RESULT', value);
    }
  },
  modules: {
  }
})
