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
html, body {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
}
</style>
