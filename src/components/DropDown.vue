<template>
  <div
    class="navbar-item has-dropdown"
    :class="{ 'is-active': isActive }"
    @click="toggleActive"
    ref="dropDownRef"
  >
    <a class="navbar-link has-text-white" style="user-select:none;">欢迎{{ userName }}</a>
    <div class="navbar-dropdown" style="margin-top:10px;">
      <DropDownItem :items="'新建文章'" @click="toCreatePost"></DropDownItem>
      <DropDownItem :items="'编辑资料'"></DropDownItem>
      <DropDownItem :items="'退出登录'" @click="logout"></DropDownItem>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import DropDownItem from './DropDownItem.vue'
import useClickOutside from '../hooks/useClickOutside'
import createMessage from './createMessage'
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
    const router = useRouter()
    const dropDownRef = ref<null | HTMLElement>(null)
    function toggleActive() {
      isActive.value = !isActive.value
    }
    function toCreatePost() {
      router.push('/createPost')
    }
    function logout() {
      localStorage.removeItem('token')
      createMessage('操作成功，2s后刷新页面', 'success')
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    }
    const isClickOutside = useClickOutside(dropDownRef)

    watch(isClickOutside, () => {
      if (isActive.value && isClickOutside.value) {
        isActive.value = false
      }
    })

    return {
      isActive,
      toggleActive,
      dropDownItem,
      dropDownRef,
      toCreatePost,
      logout,
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
