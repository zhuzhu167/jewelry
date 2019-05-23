import jaxios from '../axios-config/axios';

export const getCart = () => jaxios({
  url: '/pc/cart/cart',
  method: 'get'
});
