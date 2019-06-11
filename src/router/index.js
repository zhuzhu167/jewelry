import Vue from 'vue'
import Router from 'vue-router'
import store from "@/vuex/store";
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
import JewelryInfo from '@/components/JewelryInfo'
import Pay from '@/components/Pay'
import SelectConsignee from '@/components/SelectConsignee'
import Code from '@/components/Code'
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
      component: PersonInfo,
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart,
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order,
      meta: {
        requireAuth: true,
      }
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
      component: MdAss,
      meta: {
        requireAuth: true,
      },
      beforeEnter: (to, from, next) => {
        if (from.name !== "PersonInfo") {
          next({
            path: 'PersonInfo'
          })
        } else if (store.state.consigneeUuid == '') {
          next({
            path: 'PersonInfo'
          })
        } else {
          next();
        }
      }
    },
    {
      path: '/MdPwd',
      name: 'MdPwd',
      component: MdPwd,
      meta: {
        requireAuth: true,
      },
      beforeEnter: (to, from, next) => {
        if (from.name !== "PersonInfo") {
          next({
            path: 'PersonInfo'
          })
        } else {
          next();
        }
      }
    },
    {
      path: '/MdInfo',
      name: 'MdInfo',
      component: MdInfo,
      meta: {
        requireAuth: true,
      },
      beforeEnter: (to, from, next) => {
        if (from.name !== "PersonInfo") {
          next({
            path: 'PersonInfo'
          })
        } else {
          next();
        }
      }
    },
    {
      path: '/JewelryList',
      name: 'JewelryList',
      component: JewelryList
    },
    {
      path: '/GoodInfo',
      name: 'GoodInfo',
      component: GoodInfo,
      beforeEnter: (to, from, next) => {
        if (from.name !== "GoodList" && store.state.vCommodityInfoUuid != "") {
          history.go(-1)
        } else {
          next();
        }
      }
    },
    {
      path: '/Code',
      name: 'Code',
      component: Code
    },
    {
      path: '/JewelryInfo',
      name: 'JewelryInfo',
      component: JewelryInfo,
      beforeEnter: (to, from, next) => {
        if (from.name !== "JewelryList") {
          history.go(-1)
        } else {
          next();
        }
      }
    },
    {
      path: '/Pay',
      name: 'Pay',
      component: Pay,
      meta: {
        requireAuth: true,
      },
      beforeEnter: (to, from, next) => {
        if (store.state.sumPrice == 0 && store.stateorderCommodityUuid == "") {
          next({
            path: '/Order'
          })
        } else {
          next();
        }
      }
    },
    {
      path: '/SelectConsignee',
      name: 'SelectConsignee',
      component: SelectConsignee,
      meta: {
        requireAuth: true,
      },
      beforeEnter: (to, from, next) => {
        if (store.state.buyReceiverUuid == '' && store.state.buyList == '') {
          next({
            path: '/ShoppingCart'
          })
        } else {
          next();
        }
      }
    }
  ]
})
