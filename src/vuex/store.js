import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {}, // 用户信息

    personInfo: {}, // 个人资料

    categoryList: {}, // 首页分类列表

    cartCommodityVOList: {}, // 购物车列表
    buyList: [], // 要下单的商品uuid
    buyReceiverUuid: '', // 下单-收获人uuid

    orderCommodityVOList: {}, // 订单列表
    orderCommodityUuid: '', // 要付款订单的uuid
    sumPrice: 0, // 需要支付金额

    commodityList: {}, // 商品列表
    vCommodityInfoUuid: "", // 正在查看的商品uuid
    vCommodityInfoSize: 0, // 正在查看的商品尺寸
    commodityInfo: {}, // 商品信息
    commoditySize: '',
    pageNum: 1, // 分页
    pageSize: 12,
    maxPageNum: 1,

    jewelryList: {}, // 钻石列表
    jewelryInfo: {}, // 钻石信息
    vJewelryInfoUuid: "", //正在查看的钻石uuid
    jpageNum: 1, // 分页
    jpageSize: 12,
    jmaxPageNum: 1,

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
