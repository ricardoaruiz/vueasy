<template>
  <div id="app">
    <VzButtonDocumentation />
  </div>
</template>

<script>
import VzButtonDocumentation from './documentation/VzButtonDocumentation';

export default {
  name: 'app',
  components: { VzButtonDocumentation }
}
</script>

<style lang="scss">
@import 'documentation/style/general.scss';

body {
  font-family: 'Roboto', sans-serif;
}
#app {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
