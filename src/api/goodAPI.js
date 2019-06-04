import jaxios from '../axios-config/axios';
// 获取商品列表
export const getCommodityList = (pageNum, pageSize) => jaxios({
  url: `/pc/commodity/commodityIntroduction?pageNum=${pageNum}&pageSize=${pageSize}`,
  method: 'get'
});
// 获取商品信息
export const getCommodityInfo = uuid => jaxios({
  url: `/pc/commodity/commodity/${uuid}`,
  method: 'get'
});
// 获取钻石列表
export const getJewelryList = (pageNum, pageSize) => jaxios({
  url: `/pc/commodity/jewelryIntroduction?pageNum=${pageNum}&pageSize=${pageSize}`,
  method: 'get'
});
// 获取钻石信息
export const getJewelryInfo = uuid => jaxios({
  url: `/pc/commodity/jewelry/${uuid}`,
  method: 'get'
});
// 加入购物车
export const addCart = data => jaxios({
  url: '/pc/commodity/commodityJewelry',
  method: 'post',
  data
})
