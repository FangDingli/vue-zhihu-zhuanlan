<template>
  <teleport to="#load">
    <div class="is-flex is-justify-content-center is-align-items-center loading-mask">
      <div class="loader-inner ball-clip-rotate-multiple" style="transform: scale(1.5, 1.5);">
        <div style="border-color: hsl(171, 100%, 41%);"></div>
        <div style="border-color: hsl(171, 100%, 41%);"></div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style>
.loading-mask {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
