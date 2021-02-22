<template>
  <div>
    <GlobalHeader :user="currentUser"></GlobalHeader>
    <Loading v-if="isLoading"></Loading>
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
import { computed, defineComponent, onMounted, watch } from 'vue'
import GlobalHeader from './components/GlobalHeader.vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from './store'
import Loading from './components/Loading.vue'
import createMessage from './components/createMessage'
import axios from 'axios'

export default defineComponent({
  setup() {
    const store = useStore<GlobalDataProps>()
    const currentUser = computed(() => store.state.user)
    const isLoading = computed(() => store.state.isLoading)
    const token = computed(() => store.state.token)
    const error = computed(() => store.state.error)
    onMounted(() => {
      if (!currentUser.value.isLogin && token.value) {
        axios.defaults.headers.common.Authorization = `Bearer ${token.value}`
        store.dispatch('fetchCurrentUser')
      }
    })
    const closeNotifaction = () => {
      store.commit('setError', { status: false })
    }
    const test = () => {
      createMessage('test', 'success')
    }
    watch(
      () => error.value.status,
      () => {
        const { status, message } = error.value
        if (status && message) {
          createMessage(message, 'error')
        }
      }
    )
    return {
      currentUser,
      isLoading,
      error,
      closeNotifaction,
      test,
    }
  },
  components: {
    GlobalHeader,
    Loading,
  },
})
</script>

<style></style>
