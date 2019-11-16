<template>
  <div id="app">
    <section class="section-buttons">
      <h2>Button</h2>
      <div>
        Regular: 
        <VzButton label="Button" tooltip="Button"/>
        <VzButton label="Button" icon="check"/>
        <VzButton label="Disabled" :disabled="true" />
      </div>
      <div>
        Circle:
        <VzButton circle size="small" icon="edit"/>
        <VzButton circle icon="check"/>
        <VzButton circle size="large" icon="trash"/>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
.section-buttons button{
  margin-left: 10px;
}
.section-buttons div{
  margin-bottom: 10px;
}
</style>
