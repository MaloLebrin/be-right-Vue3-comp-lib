<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <BButton>tests</BButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BButton from './components/Button/BButton.vue'
export default defineComponent({
  name: 'App',
  components: {
    BButton,
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
