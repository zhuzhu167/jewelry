import jaxios from '../axios-config/axios';
// 登录接口
export const login = data => jaxios({
  url: '/pc/user/login',
  method: 'post',
  data
});
// 注册
export const register = data => jaxios({
  url: '/pc/user/register',
  method: 'post',
  data
});
// 短信验证
export const getCode = data => jaxios({
  url: '/pc/user/registerCode',
  method: 'post',
  data
})
// 获取个人资料
export const getUserInfo = () => jaxios({
  url: '/pc/user/person',
  method: 'get'
});
// 修改个人资料
export const modifyPerson = data => jaxios({
  url: '/pc/user/person',
  method: 'put',
  data
});
// 添加收货人信息
export const addConsignee = data => jaxios({
  url: '/pc/user/consignee',
  method: 'post',
  data
});
// 获取收货人信息
export const getConsignee = () => jaxios({
  url: '/pc/user/consignee',
  method: 'get'
});
// 删除收货人信息
export const deleteConsignee = consigneeUuid => jaxios({
  url: `/pc/user/consignee/${consigneeUuid}`,
  method: 'delete'
});
// 修改收货人信息
export const modifyConsignee = (data, consigneeUuid) => jaxios({
  url: `/pc/user/consignee/${consigneeUuid}`,
  method: 'put',
  data
});
// 修改密码
export const modifyPwd = data => jaxios({
  url: '/pc/user/pwd/',
  method: 'put',
  data
});
