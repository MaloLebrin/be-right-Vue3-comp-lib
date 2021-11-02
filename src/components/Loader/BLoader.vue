<template>
  <div
    v-if="isLoading"
    class="flex flex-col justify-center items-center bg-gray-300 absolute top-0 right-0 left-0 bottom-0"
  >
    <div
      v-if="type === LoaderTypeEnum.SPINNER"
      :class="finalClasses"
    />
    <div
      v-else-if="type === LoaderTypeEnum.BOUNCE"
      class="flex gap-2"
    >
      <div
        :class="finalClasses"
        class="animate-bounce"
      />
      <div
        :class="finalClasses"
        class="animate-bounce200"
      />
      <div
        :class="finalClasses"
        class="animate-bounce400"
      />
    </div>

    <span
      v-if="message"
      class="mt-4"
    >{{ message }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { LoaderColorsArray, LoaderColorsEnum, LoaderColorsMap, LoaderTypeEnum, LoaderTypeMap, LoaderTypesArray } from './BLoader.types'

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
    type: {
      type: String as PropType<LoaderTypeEnum>,
      required: false,
      default: LoaderTypeEnum.BOUNCE,
      validator: (prop: LoaderTypeEnum) => LoaderTypesArray.includes(prop),
    }
  },
  setup(props) {
    const classes = computed(() => LoaderColorsMap[props.color])

    const typeClasses = computed(() => LoaderTypeMap[props.type])
    const finalClasses = computed(() => `${typeClasses.value} ${classes.value}`)

    return {
      finalClasses,
      LoaderTypeEnum,
    }
  },
})
</script>
