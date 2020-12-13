import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import Index from "@/views/Index";
import NotFound from "@/views/NotFound";


Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    component:Login
  },{
    path:'/',
    component: Index
  },{
    path:'*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
