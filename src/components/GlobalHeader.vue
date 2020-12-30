<template>
  <nav class="navbar is-info global-header" style="height:52px;">
    <div class="navbar-brand">
      这里放Logo
    </div>
    <div class="end-btn-wrapper">
      <div class="sign no-sign" v-if="!user.isLogin">
        <router-link :to="'/login'"
          ><button class="button is-primary">登录</button></router-link
        >
        <router-link :to="'/login'"><button class="button ">注册</button></router-link>
      </div>
      <div class="sign is-sign" v-else>
        <DropDown :userName="user.userName"></DropDown>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import DropDown from './DropDown.vue'
export interface UserProps {
  isLogin: boolean
  userName?: string
  id?: number
}
export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
  components: {
    DropDown,
  },
})
</script>

<style scoped>
.global-header {
  display: flex;
  justify-content: space-between;
}
.end-btn-wrapper {
  display: flex;
  margin-right: 50px;
}
.sign {
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
