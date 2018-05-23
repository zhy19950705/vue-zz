import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import slider from '@/components/Slider/slider'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/hello', component: HelloWorld, hidden: true },
  {
    path: '',
    component: _import('layout/Layout')
    // redirect: 'dashboard',
    // children: [{
    //   path: 'dashboard',
    //   name: 'dashboard'
    // }]
  },
  {path:'/cart',component:_import('dashboard/ShoppingApp'),hidden:true},
  // {path:'/slider',component:slider,hidden:true}
]
export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   }
  // ]
  routes: constantRouterMap
})

export const asncRouterMap = [

]
