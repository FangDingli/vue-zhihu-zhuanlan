import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import Login from '../view/Login.vue'
import ColumnDetail from '../view/ColumnDetail.vue'

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