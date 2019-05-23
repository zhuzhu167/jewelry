// 登录
import {
  login,
  register,
  getUserInfo,
  getConsignee,
  deleteConsignee,
  modifyConsignee,
  modifyPerson,
  modifyPwd,
  addConsignee

} from '@/api/userAPI.js';
import {
  getCart
} from '@/api/cartAPI.js';
import {
  getOrder
} from '@/api/orderAPI.js';
import {
  getCommodityList,
  getCommodityInfo,
  getJewelryList,
  getJewelryInfo
} from '@/api/goodAPI';
import {
  getIndexCategory
} from '@/api/IndexAPI.js';
import store from './store';
export const Login = ({
  commit
}, data) => {
  return new Promise(resolve => {
    login(data).then(result => {
      if (result.data.token !== '') {
        commit('SET_USER_INFO', data);
        commit('SET_TOKEN', result.data.token);
        commit('IS_LOGIN', true);
        window.$cookies.set('accessToken', result.data.token);
        window.$cookies.set('account', data.account);
        resolve(true);
        return true;
      } else {
        commit('SET_ERROR', result.data.console.error);
        commit('TURN_ERRORPOPUPSWITCH', true);
        resolve(false);
        return false;
      }
    });
  });
};

// 注册
export const Register = ({
  commit
}, data) => {
  return new Promise(resolve => {
    register(data).then(result => {
      if (result.status === 200) {
        resolve(true);
        return true;
      } else {
        commit('SET_ERROR', '注册失败');
        commit('TURN_ERRORPOPUPSWITCH', true);
        resolve(false);
        return false;
      }
    });
  });
};

// 判断是否登陆
export const isLogin = ({
  commit
}) => {
  const token = window.$cookies.get('accessToken');
  const account = window.$cookies.get('account');
  if (token && account) {
    commit('IS_LOGIN', true);
    commit('SET_USER_INFO', account);
  }
};

// 获取首页分类
export const LoadIndexCategory = ({
  commit
}) => {
  return new Promise(resolve => {
    getIndexCategory().then(result => {
      if (result !== '') {
        commit('SET_CATEGORYLIST', result.data);
        console.log(result);
      }
    });
  });
};

// 获取商品列表
export const LoadCommodityList = ({
  commit
}) => {
  getCommodityList().then(result => {
    if (result.data.response !== '') {
      console.log(result.data);
      commit('SETCOMMODITYlIST', result.data.response);
    }
  });
};
// 获取购物车
export const LoadCart = ({
  commit
}) => {
  getCart().then(result => {
    if (result.data !== '') {
      console.log(result.data.cartCommodityVOList[0]);
    }
  });
};

// 获取商品信息
export const LoadCommodityInfo = ({
  commit
}) => {
  const uuid = window.$cookies.get('CommodityUuid');
  getCommodityInfo(uuid).then(result => {
    if (result.data.response !== '') {
      commit('SET_COMMODITYINFO', result.data);
    }
  });
};

// 设置商品uuid
export const SetCommodityUuid = ({
  commit
}, uuid) => {
  window.$cookies.set('CommodityUuid', uuid);
};

// 获取钻石列表
export const LoadJewelryList = ({
  commit
}) => {
  return new Promise(resolve => {
    getJewelryList().then(result => {
      if (result.data !== '') {
        commit('SET_JEWELRYLIST', result.data.response);
        console.log(result);
      }
    });
  });
};

// 设置钻石uuid
export const SetJewelryUuid = ({
  commit
}, uuid) => {
  window.$cookies.set('JewelryUuid', uuid);
};

// 设置指环尺寸
export const SetSize = ({
  commit
}, data) => {
  window.$cookies.set('Size', data);
};

// 获取钻石信息
export const LoadJewelryInfo = ({
  commit
}, uuid) => {
  return new Promise(resolve => {
    getJewelryInfo(uuid).then(result => {
      if (result.data !== '') {
        commit('SET_JEWELRYINFO', result.data.response);
        console.log(result.data.response);
      }
    });
  });
};

// 获取订单
export const LoadOrder = ({
  commit
}) => {
  getOrder().then(result => {
    if (result.data !== '') {}
  });
};

// 添加收货人信息
export const AddConsignee = ({
  commit
}, data) => {
  return new Promise(resolve => {
    addConsignee(data).then(result => {
      if (result.status === 200) {
        resolve(true);
        return true;
      } else {
        resolve(false);
        return false;
      }
    });
  });
};
// 获取收货人列表信息
export const LoadConsignee = ({
  commit
}) => {
  getConsignee().then(result => {
    if (result.total !== 0) {
      commit('SET_CONSIGNEELIST', result.data.response);
    }
  });
};

// 删除收货人信息
export const DeleteConsignee = ({
  commit
}, data) => {
  return new Promise(resolve => {
    deleteConsignee(data).then(result => {
      if (result !== '') {
        console.log('删除收货人信息成功');
        resolve(true);
        return true;
      } else {
        console.log('删除收货人信息失败');
        resolve(false);
        return false;
      }
    });
  });
};
// 修改收货人信息-赋值UUID
export const setConsigneeUuid = ({
  commit
}, data) => {
  commit('SET_CONSIGNEELIST_UUID', data.receiverUuid);
  commit('SET_CONSIGNEEINFO', data);
};
// 修改收货人信息
export const ModifyConsignee = ({
    commit
  },
  data) => {
  return new Promise(resolve => {
    const uuid = store.state.consigneeUuid;
    modifyConsignee(data, uuid).then(result => {
      if (result !== '') {
        console.log('修改收货人信息成功');
        resolve(true);
        return true;
      } else {
        console.log('修改收货人信息失败');
        resolve(false);
        return false;
      }
    });
  });
};

// 获取个人资料
export const LoadUserInfo = ({
  commit
}) => {
  getUserInfo().then(result => {
    if (result.data !== '') {
      commit('SET_PERSONINFO', result.data);
    } else {
      console.log('获取个人资料失败');
    }
  });
};

// 修改个人资料
export const ModifyPerson = ({
  commit
}, data) => {
  return new Promise(resolve => {
    console.info(data);
    modifyPerson(data).then(result => {
      if (result.status === 200) {
        console.log('修改个人资料成功');
        resolve(true);
        return true;
      } else {
        console.log('修改个人资料失败');
        resolve(false);
        return false;
      }
    });
  });
};

// 修改密码
export const ModifyPwd = ({
  commit
}, data) => {
  return new Promise(resolve => {
    modifyPwd(data).then(result => {
      if (result !== '') {
        console.log(result);
        console.log('修改密码成功');
        resolve(true);
        return true;
      } else {
        console.log('修改密码失败');
        resolve(false);
        return false;
      }
    });
  });
};
// 退出
export const signOut = ({
  commit
}) => {
  commit('SET_USER_INFO', '');
  window.$cookies.remove('accessToken');
  window.$cookies.remove('account');
  commit('IS_LOGIN', false);
};
