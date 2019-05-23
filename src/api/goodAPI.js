import jaxios from '../axios-config/axios';
// 获取商品列表
export const getCommodityList = () => jaxios({
  url: '/pc/commodity/commodityIntroduction',
  method: 'get'
});
// 获取商品信息
export const getCommodityInfo = uuid => jaxios({
  url: `/pc/commodity/commodity/${uuid}`,
  method: 'get'
});
// 获取钻石列表
export const getJewelryList = () => jaxios({
  url: '/pc/commodity/jewelryIntroduction',
  method: 'get'
});
// 获取钻石信息
export const getJewelryInfo = uuid => jaxios({
  url: `/pc/commodity/jewelry/${uuid}`,
  method: ''
});
