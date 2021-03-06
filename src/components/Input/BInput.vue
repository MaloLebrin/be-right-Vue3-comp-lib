<template>
  <div class="relative inline-flex w-full">
    <input
      v-bind="$attrs"
      :disabled="disabled"
      :aria-disabled="disabled"
      :placeholder="placeholder"
      :aria-placeholder="placeholder"
      :value="modelValue"
      :type="type"
      :class="classes"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from 'vue'
import { InputTypesEnum, InputTypes, InputTypesArray, InputStatusesClassesMap, InputStatusesEnum } from './BInput.types'
import { FIELD_STATUS_INJECTION_KEY } from './../Field/BField.types'
import { DOM_EVENTS_ENUM } from '@/utils'
/**
 * Form Input with automatic validation (when used with BField).
 */
export default defineComponent({
  name: 'BInput',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    type: {
      type: String as PropType<InputTypes>,
      required: false,
      default: InputTypesEnum.TEXT,
      validator: (prop: InputTypesEnum) => InputTypesArray.includes(prop)
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
  emits: [DOM_EVENTS_ENUM.INPUT],
  setup() {
    const fieldStatus = inject(FIELD_STATUS_INJECTION_KEY, computed(() => InputStatusesEnum.DEFAULT))

    const classes = computed(() => InputStatusesClassesMap[fieldStatus.value])

    return {
      classes,
    }
  }
})
</script>
