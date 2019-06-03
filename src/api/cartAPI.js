import jaxios from '../axios-config/axios';

export const getCart = () => jaxios({
  url: '/pc/cart/cart',
  method: 'get'
});
export const buy = (data) => jaxios({
  url: '/pc/cart/cart',
  method: 'post',
  data
})
export const deleteCart = (uuid) => jaxios({
  url: `/pc/cart/cart/${uuid}`,
  method: 'delete'
})
