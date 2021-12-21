<template>
  <div :class="[classes, 'relative']">
    <div
      v-if="isCloseable"
      class="bg-white border-2 border-black-light text-black absolute top-1 right-1 rounded-full cursor-pointer"
      @click="onClose"
    >
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="12" height="12"
        viewBox="0 0 24 24"
        style=" fill:#000000;"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path></svg>
    </div>
    <div class="flex items-center justify-center">

      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { TagVariantsEnum, TagVariantsArray, TagsVariantsMap } from './BTag.types'
export default defineComponent({
  name: 'BTag',
  props: {
    /**
     * The variant of the tag.
     */
    variant: {
      type: String as PropType<TagVariantsEnum>,
      required: false,
      default: TagVariantsEnum.PRIMARY,
      validator: (prop: TagVariantsEnum) => TagVariantsArray.includes(prop)
    },
    isCloseable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props, { emit}) {
    const classes = computed(() => TagsVariantsMap[props.variant])

    function onClose() {
      emit('onClose')
    }
    return {
      classes,
      onClose,
    }
  }
})
</script>
