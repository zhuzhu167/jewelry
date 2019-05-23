// 登录状态
export const IS_LOGIN = (state,
  data) => {
  state.is_login = data;
};
// 账号信息
export const SET_USER_INFO = (state,
  data) => {
  state.userInfo.account = data;
};
// 请求令牌
export const SET_TOKEN = (state, data) => {
  state.token = data;
};
// 错误信息
export const SET_ERROR = (state, data) => {
  state.errorMess = data;
};
// 错误按钮
export const TURN_ERRORPOPUPSWITCH = (state, data) => {
  state.errorpopupSwitch = data;
};
// 首页分类
export const SET_CATEGORYLIST = (state, data) => {
  state.categoryList = data;
};
// 购物车
export const SET_CARTLIST = (state, data) => {
  state.cartCommodityVOList = data;
};
// 订单
export const SET_ORDERLIST = (state, data) => {
  state.orderCommodityVOList = data;
};
// 收货人信息uuid
export const SET_CONSIGNEELIST_UUID = (state, data) => {
  state.consigneeUuid = data;
};
// 收货人列表信息
export const SET_CONSIGNEELIST = (state, data) => {
  state.consigneeList = data;
};
// 收货人信息
export const SET_CONSIGNEEINFO = (state, data) => {
  state.consigneeInfo = data;
};
// 个人资料
export const SET_PERSONINFO = (state, data) => {
  state.personInfo = data;
};
// 商品列表
export const SETCOMMODITYlIST = (state, data) => {
  state.commodityList = data;
};
// 商品详情
export const SET_COMMODITYINFO = (state, data) => {
  state.commodityInfo = data;
};
// 钻石列表
export const SET_JEWELRYLIST = (state, data) => {
  state.jewelryList = data;
};
// 钻石信息
export const SET_JEWELRYINFO = (state, data) => {
  state.jewelryInfo = data;
};
