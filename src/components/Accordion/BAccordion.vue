<template>
  <div
    :class="classes"
    class="border-2 rounded-t-lg rounded-b-lg mt-2 z-20"
  >
    <div
      class="w-full h-full z-20"
      @click="click"
    >
      <slot name="title" />

    </div>
    <div
      class="rounded transform ease-in-out duration-700 transition-all z-0 h-full relative overflow-hidden w-full"
      :class="isAccordionOpen ? 'opacity-1' : 'opacity-0'"
      ref="contentAccordion"
      :style="isAccordionOpen ? openClasses : 'max-height: 0'"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, PropType } from 'vue'
import { AccordionVariantsEnum, AccordionVariantsArray, AccordionVariantsMap } from './BAccordion.types'

export default defineComponent({
  name: 'BAccordion',
  props: {
    title: {
      type: String,
      required: false,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String as PropType<AccordionVariantsEnum>,
      required: false,
      default: AccordionVariantsEnum.PRIMARY,
      validator: (prop: AccordionVariantsEnum) => AccordionVariantsArray.includes(prop)
    },
  },
  setup(props, { emit }) {
    const classes = computed(() => AccordionVariantsMap[props.variant])
    const isAccordionOpen = ref(props.isOpen)
    const contentAccordion = ref<null | HTMLElement>(null)
    const openClasses = computed(() => contentAccordion.value ? `max-height: ${contentAccordion.value.scrollHeight}px` : 'hidden')

    function click() {
      isAccordionOpen.value = !isAccordionOpen.value
      emit('open', isAccordionOpen.value)
    }
    return {
      isAccordionOpen,
      click,
      classes,
      contentAccordion,
      openClasses,
    }
  }
})
</script>
