<template>
  <div
    class="navbar-item has-dropdown"
    :class="{ 'is-active': isActive }"
    @click="toggleActive"
    ref="dropDownRef"
  >
    <a class="navbar-link has-text-white" style="user-select:none;">欢迎{{ userName }}</a>
    <div class="navbar-dropdown" style="margin-top:10px;">
      <DropDownItem
        v-for="(item, index) in dropDownItem"
        :key="index"
        :items="item"
      ></DropDownItem>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import DropDownItem from './DropDownItem.vue'
const dropDownItem: string[] = ['新建文章', '编辑资料', '退出登录']
export default defineComponent({
  name: 'DropDown',
  props: {
    userName: {
      type: String,
      required: false,
    },
  },
  setup() {
    // eslint-disable-next-line
    let isActive = ref(false)
    const dropDownRef = ref<null | HTMLElement>(null)
    function toggleActive() {
      isActive.value = !isActive.value
    }
    // eslint-disable-next-line
    function handler(e: MouseEvent) {
      if (dropDownRef.value) {
        if (!dropDownRef.value.contains(e.target as HTMLElement) && isActive.value) {
          isActive.value = false
        }
      }
    }

    onMounted(() => {
      document.addEventListener('click', handler)
    })
    onUnmounted(() => {
      document.removeEventListener('click', handler)
    })

    return {
      isActive,
      toggleActive,
      dropDownItem,
      dropDownRef,
    }
  },
  components: {
    DropDownItem,
  },
})
</script>

<style scoped>
.navbar-dropdown {
  background-color: white;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top: 2px solid #dbdbdb;
  box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);
  font-size: 0.875rem;
  left: 0;
  min-width: 100%;
  position: absolute;
  top: 100%;
  z-index: 20;
}
.navbar-link ::after {
  border-color: #fff;
}
</style>
