<template>
  <teleport to="#message">
    <div class="columns is-centered" v-if="isVisiable">
      <div class="column is-full-mobile is-5-desktop">
        <div class="notification is-light" :class="msgTypeClsObj">
          <button class="delete" @click.prevent="close"></button>
          {{ message }}
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
export type MessageType = 'success' | 'error' | 'default'
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  props: {
    message: String,
    messageType: {
      type: String as PropType<MessageType>,
      default: 'default',
    },
  },
  emits: ['close-message'],
  setup(props, context) {
    const isVisiable = ref(true)
    const msgTypeClsObj = {
      'is-primary': props.messageType == 'default',
      'is-success': props.messageType == 'success',
      'is-danger': props.messageType == 'error',
    }
    const close = () => {
      isVisiable.value = false
      context.emit('close-message', true)
    }
    return {
      isVisiable,
      msgTypeClsObj,
      close,
    }
  },
})
</script>

<style scoped></style>
