import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import Index from "@/views/Index";
import NotFound from "@/views/NotFound";
import Layout from "@/views/Layout";
import Goods from "@/views/shop/Goods";
import Orders from "@/views/shop/Orders";
import ImgList from "@/views/image/ImgList";

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
    name:'layout',
    redirect:'/index',
    component: Layout,
    children:[
      {
        path: '/index',
        name:'index',
        component: Index,
        meta:{
          title:'首页'
        }
      },{
        path: "/shop/goods",
        name:'goods',
        component: Goods,
        meta:{
          title:'商品列表'
        }
      },{
        path:'/shop/orders',
        name:'orders',
        component: Orders,
        meta:{
          title:'订单列表',
        }
      },{
        path:'/image',
        name:'images',
        component: ImgList,
        meta: {
          title:'图片列表'
        }
      }
    ]
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

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
