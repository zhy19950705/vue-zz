import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/hello', component: HelloWorld, hidden: true }
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
