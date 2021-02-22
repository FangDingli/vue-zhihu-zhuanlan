import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../view/Home.vue'
import Login from '../view/Login.vue'
import Register from '../view/Register.vue'
import ColumnDetail from '../view/ColumnDetail.vue'
import CreatePost from '../view/CreatePost.vue'

const routerHistory = createWebHistory()
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { redirectToHome: true }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { redirectToHome: true }
  },
  {
    path: "/createPost",
    name: "createPost",
    component: CreatePost,
    meta: { needLogin: true }
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: ColumnDetail
  },
]

const router = createRouter({
  history: routerHistory,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.redirectToHome && store.state.user.isLogin) {
    next({ name: '/' })
  } else if (to.meta.needLogin && !store.state.user.isLogin) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router