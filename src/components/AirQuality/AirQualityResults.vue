<template>
  <ul>
    <li>
      <ResultItem />
    </li>
    <li>
      <ResultItem />
    </li>
  </ul>
</template>

<script>
import ResultItem from './AirQualityResultItem';

export default {
  components: {
    ResultItem,
  }
}
</script>

<style lang="scss" scoped>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    li {
      flex: 1 0 50%;
      color: #171e42;
    }
  }
</style>