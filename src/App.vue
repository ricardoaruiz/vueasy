<template>
  <div id="app">
    <VzButtonDocumentation />
    <VzMessageDocumentation />
  </div>
</template>

<script>
import VzButtonDocumentation from './documentation/VzButtonDocumentation';
import VzMessageDocumentation from './documentation/VzMessageDocumentation';

export default {
  name: 'app',
  components: { VzButtonDocumentation, VzMessageDocumentation }
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
