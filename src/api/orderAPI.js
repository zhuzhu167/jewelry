import jaxios from '../axios-config/axios';
// 获取订单
export const getOrder = () => jaxios({
  url: '/pc/order/order',
  method: 'get'
});
// 删除订单
export const deleteOrder = (uuid) => jaxios({
  url: `/pc/order/order/${uuid}`,
  method: 'delete'
})
// 付款
export const payOrder = (uuid) => jaxios({
  url: `/pc/order/pay/${uuid}`,
  method: 'put'
})
