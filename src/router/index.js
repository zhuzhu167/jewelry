import Vue from 'vue'
import Router from 'vue-router'
import store from "@/vuex/store";
const HelloWorld = resolve => require(['@/components/HelloWorld'], resolve);
const Header = resolve => require(['@/components/Header'], resolve);
const Index = resolve => require(['@/components/Index'], resolve);
const Login = resolve => require(['@/components/Login'], resolve);
const Register = resolve => require(['@/components/Register'], resolve);
const PersonInfo = resolve => require(['@/components/PersonInfo'], resolve);
const ShoppingCart = resolve => require(['@/components/ShoppingCart'], resolve);
const Order = resolve => require(['@/components/Order'], resolve);
const GoodList = resolve => require(['@/components/GoodList'], resolve);
const AddAss = resolve => require(['@/components/person/AddAss'], resolve);
const MdAss = resolve => require(['@/components/person/MdAss'], resolve);
const MdPwd = resolve => require(['@/components/person/MdPwd'], resolve);
const MdInfo = resolve => require(['@/components/person/MdInfo'], resolve);
const JewelryList = resolve => require(['@/components/JewelryList'], resolve);
const GoodInfo = resolve => require(['@/components/GoodInfo'], resolve);
const JewelryInfo = resolve => require(['@/components/JewelryInfo'], resolve);
const Pay = resolve => require(['@/components/Pay'], resolve);
const SelectConsignee = resolve => require(['@/components/SelectConsignee'], resolve);
const Code = resolve => require(['@/components/Code'], resolve);

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
        if (store.state.sumPrice == 0) {
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
