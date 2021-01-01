import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import Login from '../view/Login.vue'
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
    component: Login
  },
  {
    path: "/createPost",
    name: "createPost",
    component: CreatePost
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

export default router