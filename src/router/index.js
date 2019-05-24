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
import GoodList from '@/components/GoodList'
import AddAss from '@/components/person/AddAss'
import MdAss from '@/components/person/MdAss'
import MdPwd from '@/components/person/MdPwd'
import MdInfo from '@/components/person/MdInfo'
import JewelryList from '@/components/JewelryList'
import GoodInfo from '@/components/GoodInfo'
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
    },
    {
      path: '/GoodList',
      name: 'GoodList',
      component: GoodList
    },
    {
      path: '/AddAss',
      name: 'AddAss',
      component: AddAss
    },
    {
      path: '/MdAss',
      name: 'MdAss',
      component: MdAss
    },
    {
      path: '/MdPwd',
      name: 'MdPwd',
      component: MdPwd
    },
    {
      path: '/MdInfo',
      name: 'MdInfo',
      component: MdInfo
    },
    {
      path: '/JewelryList',
      name: 'JewelryList',
      component: JewelryList
    },
    {
      path: '/GoodInfo',
      name: 'GoodInfo',
      component: GoodInfo
    }
  ]

})
