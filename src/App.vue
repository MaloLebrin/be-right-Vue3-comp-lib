<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <BAccordion title="test">tests</BAccordion>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BAccordion from './components/Accordion/BAccordion.vue'
export default defineComponent({
  name: 'App',
  components: {
    BAccordion,
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
