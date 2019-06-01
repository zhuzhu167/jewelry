import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      account: '',
      password: ''
    }, // 用户信息

    personInfo: {
      account: '无',
      email: '无',
      phone: '无',
      username: '无'
    }, // 个人资料

    categoryList: {}, // 首页分类列表

    cartCommodityVOList: {}, // 购物车列表
    orderCommodityVOList: {}, // 订单列表

    commodityList: {}, // 商品列表
    commodityInfo: {}, // 商品信息
    commoditySize: '',
    pageNum: 1, // 分页
    pageSize: 12,

    jewelryList: {}, // 钻石列表
    jewelryInfo: {}, // 钻石信息

    consigneeList: {}, // 收货人信息列表
    consigneeInfo: {}, // 收货人信息

    token: '', // 请求令牌
    is_login: false, // 是否登录
    signUpStep: 0, // 注册步骤



    errorpopupSwitch: false, // 错误弹窗开关
    addSwitch: false, // 添加钻石开关
    addAddressSwitch: false, // 添加收货地址开关
    cPwsSwitch: false, // 修改密码开关
    cInfoSwitch: false, // 修改个人资料开关
    cRASwitch: false, // 修改收货地址开关
    errorMess: ''
  },
  getters,
  actions,
  mutations
});
