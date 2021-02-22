import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import 'bulma/css/bulma.css'
import 'loaders.css'

axios.defaults.baseURL = 'http://apis.imooc.com/api/'
axios.interceptors.request.use(config => {
  config.params = { ...config.params, icode: '******' }
  if (config.data instanceof FormData) {
    config.data.append('icode', '0B62AD9814C3DAFC')
  } else {
    config.data = { ...config.data, icode: '******' }
  }
  store.commit("setLoading", true)
  store.commit('setError', { status: false })
  return config
})
axios.interceptors.response.use(config => {
  store.commit("setLoading", false)
  return config
}, err => {
  const { error } = err.response.data
  store.commit('setError', { status: true, message: error })
  store.commit('setLoading', false)
  console.log(err.response)
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
