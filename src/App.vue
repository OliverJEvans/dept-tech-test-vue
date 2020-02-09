<template>
  <AirQuality />
</template>

<script>
import AirQuality from './components/AirQuality.vue'

export default {
  name: 'App',
  components: {
    AirQuality
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');

html, body {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
}
</style>
