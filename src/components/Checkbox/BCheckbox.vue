<template>
  <div>
    <input
      :class="classes"
      v-bind="$attrs"
      type="checkbox"
      :checked="checked"
      :disabled="disabled"
      @input="(event) => $emit('update:checked', event.target.checked)"
    />
    <label class="flex flex-row items-center font-bold cursor-pointer text">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { CheckboxVariantsEnum, CheckboxVariantsArray, CheckboxsVariantsMap } from './BCheckbox.types'

export default defineComponent({
  name: 'BCheckbox',
  props: {
    /**
     * The variant of the Checkbox.
     */
    variant: {
      type: String as PropType<CheckboxVariantsEnum>,
      required: false,
      default: CheckboxVariantsEnum.PRIMARY,
      validator: (prop: CheckboxVariantsEnum) => CheckboxVariantsArray.includes(prop)
    },
    checked: {
      type: Boolean,
      required: false,
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const classes = computed(() => CheckboxsVariantsMap[props.variant])

    return {
      classes,
    }
  }
})
</script>
