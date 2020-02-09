<template>
  <div>
    <div class="search__wrapper" v-bind:class="{ 'search__wrapper--open': searchedCity !== '' }">
      <div class="input__wrapper">
        <input
          type="search"
          class="input"
          placeholder="Enter city name..."
          v-on:input="filterCities($event)"
        />
      </div>
      <ul class="search__results" v-if="searchedCity !== ''">
        <li v-for="(city, index) in filteredCities" v-bind:key="index">
          <button v-on:click="pinCity(city)">{{ city.name }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      searchedCity: state => state.searchedCity
    }),
    ...mapGetters(['filteredCities'])
  },
  methods: {
    ...mapActions(['setSearchedCity', 'pinCity']),

    filterCities(e) {
      this.setSearchedCity(e.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
  .input__wrapper {
    background: #ffffff;
    border: 2px solid #bebebe;
    border-radius: 8px;
    overflow: hidden;
  }

  .input {
    padding: 10px;
    border: 0;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
  }

  .search__wrapper {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    border: 1px solid #b7acd8;
    border-radius: 10px;

    &--open {
      background: white;
      overflow: hidden;
    }
  }

  .search__results {
    margin: 0;
    padding: 0;
    list-style: none;
    max-height: 185px;
    overflow: auto;

    li {
      display: block;

      &:hover {
        background: #f2f2f2;
        cursor: pointer;
      }
    }

    button {
      display: block;
      background: none;
      border: none;
      padding: 10px;
      width: 100%;
      text-align: left;
    }
  }
</style>