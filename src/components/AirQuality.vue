<template>
  <div class="wrapper">
    <div class="container">
      <div class="content">
        <h1>Compare your Air</h1>
        <p>Compare the air quality between cities in the UK.</p>
        <p>Select cities to compare using the search tool below.</p>
      </div>
      <Search />
      <Results />
    </div>
  </div>
</template>

<script>
import Search from '../components/AirQuality/AirQualitySearch';
import Results from '../components/AirQuality/AirQualityResults';
import { mapActions } from 'vuex'


export default {
  components: {
    Search,
    Results
  },
  created: function() {
    this.getCities();
  },
  methods: {
    ...mapActions([
      'getCities'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 100%;
    width: 100%;
    background: linear-gradient(236deg, rgba(68,117,174,1) 0%, rgba(119,56,175,1) 100%);
  }

  .container {
    width: 960px;
    margin: 0 auto;
    height: 100%;
  }

  .content {
    text-align: center;
    color: #ffffff;
  }

  h1 {
    margin-top: 0;
  }
</style>