import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import Index from "@/views/Index";
import NotFound from "@/views/NotFound";


Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    meta:{
      title:'登录',
    },
    component:Login,
  },{
    path:'/',
    redirect:'/index'
  },{
    path: '/index',
    component: Index,
    meta:{
      title:'首页'
    }
  },{
    path:'*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
