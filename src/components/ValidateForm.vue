<template>
  <form>
    <slot name="default"></slot>
    <span class="btn-area" @click.prevent="formSubmit">
      <slot name="submit">
        <button class="button is-primary">
          Send message
        </button>
      </slot>
    </span>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt, { Handler } from 'mitt'
type ValidateFunc = () => boolean
export const emitter = mitt()
export default defineComponent({
  emits: ['submit-form'],
  setup(props, context) {
    let funcArr: ValidateFunc[] = []
    const formSubmit = () => {
      const result = funcArr.map(item => item()).every(result => result)
      context.emit('submit-form', result)
    }
    const callback: Handler = (f: ValidateFunc) => {
      funcArr.push(f)
      //console.log(`push结果: ${funcArr}`)
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      funcArr = []
    })
    return {
      formSubmit,
    }
  },
})
</script>

<style scoped></style>
