<template>
  <div :class="classes">
    <div class="px-6 py-4">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { CardVariantsEnum, CardVariantsMap } from './BCard.types'

export default defineComponent({
  name: 'BCard',
  props: {
    variant: {
      type: String as PropType<CardVariantsEnum>,
      default: CardVariantsEnum.PRIMARY,
    },
  },
  setup(props) {
    const classes = computed(() => CardVariantsMap[props.variant])
    return {
      classes,
    }
  },
})
</script>
