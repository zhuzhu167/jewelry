import jaxios from '../axios-config/axios';
// 获取首页的分类
export const getIndexCategory = () => jaxios({
  url: '/pc/index/category',
  method: 'get'
});
