import jaxios from '../axios-config/axios';

export const getOrder = () => jaxios({
  url: '/pc/order/order',
  method: 'get'
});
