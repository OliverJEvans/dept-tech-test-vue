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