<template>
  <BLoader
    :isLoading="true"
    type="spinner"
    class="absolute top-0 right-0 left-0 bottom-0"
  />

</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import BLoader from '@/components/Loader/BLoader.vue'

export default defineComponent({
  name: 'App',
  components: {
    BLoader,
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
