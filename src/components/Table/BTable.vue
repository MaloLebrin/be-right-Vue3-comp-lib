<template>
  <table class="flex shadow-lg bg-white">
    <slot></slot>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BTable',
})
</script>
