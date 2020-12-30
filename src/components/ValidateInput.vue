<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <input
        class="input"
        :class="{ 'is-danger': inputRef.isError }"
        :value="inputRef.inputVal"
        @input="inputChange"
        @blur="inputValidate"
        v-bind="$attrs"
      />
    </div>
    <p v-show="inputRef.isError" class="help is-danger">{{ inputRef.errMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, onMounted } from 'vue'
import { emitter } from './ValidateForm.vue'
interface RuleProps {
  type: 'required' | 'email'
  errMessage: string
}
export type Rules = RuleProps[]
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export default defineComponent({
  props: {
    label: {
      type: String,
      required: false,
    },
    rules: {
      type: Array as PropType<Rules>,
      required: false,
    },
    modelValue: String,
  },
  inheritAttrs: false,
  setup(props, context) {
    const inputRef = reactive({
      inputVal: props.modelValue || '',
      isError: false,
      errMessage: '',
    })
    const inputChange = (e: KeyboardEvent) => {
      const newVal = (e.target as HTMLInputElement).value
      inputRef.inputVal = newVal
      context.emit('update:modelValue', newVal)
    }
    const inputValidate = () => {
      if (props.rules) {
        const allPassed = props.rules.every(item => {
          let passed = true
          inputRef.errMessage = item.errMessage
          switch (item.type) {
            case 'required':
              passed = inputRef.inputVal != ''
              break
            case 'email':
              passed = emailReg.test(inputRef.inputVal)
              break
            default:
              break
          }
          return passed
        })
        inputRef.isError = !allPassed
        return allPassed
      }
      return true
    }
    onMounted(() => {
      emitter.emit('form-item-created', inputValidate)
    })
    return {
      inputRef,
      inputValidate,
      inputChange,
    }
  },
})
</script>

<style scoped></style>
