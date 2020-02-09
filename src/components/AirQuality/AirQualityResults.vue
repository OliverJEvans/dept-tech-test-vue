<template>
  <ul class="results">
    <li class="results__item" v-for="(result, index) in pinnedResults" v-bind:key="index">
      <div class="item">
        <p class="timestamp">updated {{ earliestDate(result.measurements) | moment("from", "now") }}</p>
        <h2>{{ result.location }}</h2>
        <p>in {{ result.city }}, United Kingdom</p>
        <p><strong>
          Values:
          <ul class="measurements">
            <li class="measurements__item" v-for="(measurement, index) in result.measurements" v-bind:key="index">
              {{measurement.parameter | upperCase}}:
              {{measurement.value}}<template v-if="index !== result.measurements.length-1">,</template>
            </li>
          </ul>
        </strong></p>
        <button class="closeBtn" v-on:click="unPinResult(result)"><span>Close</span></button>
      </div>
    </li>
    <li class="results__item results__item--loading" v-if="loadingPinnedResults">
      <div class="item">
        <p class="timestamp"></p>
        <h2 class="heading"></h2>
        <p class="location"></p>
        <p class="measurements"><strong></strong></p>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      pinnedResults: state => state.pinnedResults,
      loadingPinnedResults: state => state.loadingPinnedResults
    }),
  },
  filters: {
    upperCase: function (value) {
      return value.toUpperCase();
    }
  },
  methods: {
    ...mapActions(['unPinResult']),
    earliestDate(measurements) {
      const earliestMeasurement = measurements.reduce((r, o) => o.lastUpdated < r.lastUpdated ? o : r);
      const earliestDate = earliestMeasurement.lastUpdated;
      return earliestDate;
    }
  }
}
</script>

<style lang="scss" scoped>
  .results {
    margin: 80px 0 0;
    padding: 0;
    list-style: none;

    @media (min-width: 540px) {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }

    &__item {
      color: #171e42;

      @media (min-width: 540px) {
        flex: 0 0 50%;
      }
    }
  }

  .item {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 15px 30px;
    position: relative;
    margin: 10px
  }

  h2 {
    color: #7738af;
  }

  .closeBtn {
    position: absolute;
    top: 15px;
    right: 15px;
    height: 20px;
    width: 20px;
    background-image: url('../../assets/close.svg');
    border: none;
    cursor: pointer;

    span {
      //.visually-hidden
      position: absolute !important;
      clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
      clip: rect(1px, 1px, 1px, 1px);
      padding:0 !important;
      border:0 !important;
      height: 1px !important;
      width: 1px !important;
      overflow: hidden;
    }
  }

  .measurements {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline;

    &__item {
      display: inline;
    }
  }

  .timestamp {
    text-transform: uppercase;
  }

  .results__item--loading {
    .timestamp, .heading, .location, .measurements {
      display: block;
      background: #f3f3f3;
    }

    .timestamp {
      height: 20px;
      width: 200px;
    }

    h2 {
      height: 30px;
      width: 300px;
    }

    .location {
      height: 20px;
      width: 250px;
    }

    .measurements {
      height: 20px;
      width: 200px;
      margin-bottom: 6px;
    }

  }
</style>