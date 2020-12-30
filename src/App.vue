<template>
  <div>
    <GlobalHeader :user="currentUser"></GlobalHeader>
    <div class="column">
      <div class="columns is-gapless">
        <div class="column"></div>
        <div class="column is-full-mobile is-9-desktop">
          <router-view></router-view>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from './store'
const testUserData: UserProps = {
  isLogin: false,
  userName: 'Fang',
  id: 1,
}

export default defineComponent({
  setup() {
    const store = useStore<GlobalDataProps>()
    const currentUser = computed(() => store.state.user)
    return {
      userProps: testUserData,
      currentUser,
    }
  },
  components: {
    GlobalHeader,
  },
})
</script>

<style></style>
