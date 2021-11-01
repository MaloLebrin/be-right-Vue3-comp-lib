<template>
  <div
    v-if="isLoading"
    class="flex flex-col justify-center items-center bg-gray-300 absolute top-0 right-0 left-0 bottom-0"
  >
    <div :class="classes">
    </div>
    <span
      v-if="message"
      class="mt-4"
    >{{ message }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { LoaderColorsArray, LoaderColorsEnum, LoaderColorsMap } from './BLoader.types'

export default defineComponent({
  name: 'BLoader',
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: null,
    },
    color: {
      type: String as PropType<LoaderColorsEnum>,
      required: false,
      default: LoaderColorsEnum.PRIMARY,
      validator: (prop: LoaderColorsEnum) => LoaderColorsArray.includes(prop)
    },
  },
  setup(props) {
    const classes = computed(() => LoaderColorsMap[props.color])
    return {
      classes,
    }
  },
})
</script>
