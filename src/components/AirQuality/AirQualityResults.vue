<template>
  <ul class="results">
    <li class="results__item" v-for="(result, index) in pinnedResults" v-bind:key="index">
      <div class="item">
        <p>Updated 6 weeks ago</p>
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
        <button><span>Close</span></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      pinnedResults: state => state.pinnedResults
    })
  },
  filters: {
    upperCase: function (value) {
      return value.toUpperCase();
    }
  }
}
</script>

<style lang="scss" scoped>
  .results {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    &__item {
      flex: 1 0 50%;
      color: #171e42;
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

  button {
    position: absolute;
    top: 15px;
    right: 15px;
    height: 25px;
    width: 25px;
    background: red;
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
</style>