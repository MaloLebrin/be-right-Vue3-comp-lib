<template>
  <BLoader
    :isLoading="false"
    type="spinner"
    class="absolute top-0 right-0 left-0 bottom-0"
  />
  <BButton size="small">Commencez</BButton>
  <BButton
    size="small"
    variant="warning"
  >Commencez</BButton>
  <BButton
    size="small"
    variant="danger"
  >Commencez</BButton>
  <BButton
    variant="success"
    size="small"
  >Commencez</BButton>
  <BButton
    variant="promotion"
    size="small"
  >Commencez</BButton>
  <BButton
    variant="white"
    size="small"
  >Commencez</BButton>

</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import BLoader from '@/components/Loader/BLoader.vue'
import BButton from '@/components/Button/BButton.vue'
export default defineComponent({
  name: 'App',
  components: {
    BLoader,
    BButton,
  },
  setup() {
    const form = reactive({
      email: null,
      password: 'null',
    })

    const test = ref(false)

    return {
      ...toRefs(form),
      test
    }
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
  height: 100vh;
}
</style>
