import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'
import PersonInfo from '@/components/PersonInfo'
import ShoppingCart from '@/components/ShoppingCart'
import Order from '@/components/Order'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/PersonInfo',
      name: 'PersonInfo',
      component: PersonInfo
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    }
  ]
})
