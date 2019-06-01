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
  getCart,
  buy,
  deleteCart
} from '@/api/cartAPI.js';
import {
  getOrder
} from '@/api/orderAPI.js';
import {
  getCommodityList,
  getCommodityInfo,
  getJewelryList,
  getJewelryInfo,
  addCart
} from '@/api/goodAPI';
import {
  getIndexCategory
} from '@/api/indexAPI.js';
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
  return new Promise(resolve => {
    const token = window.$cookies.get('accessToken');
    const account = window.$cookies.get('account');
    if (token && account) {
      commit('IS_LOGIN', true);
      commit('SET_USER_INFO', account);
      return (true)
    } else {
      return (false)
    }
  })
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

// 获取商品列表 start============================================================
export const LoadCommodityList = ({
  commit
}) => {
  const pageNum = store.state.pageNum;
  const pageSize = store.state.pageSize;
  getCommodityList(pageNum, pageSize).then(result => {
    if (result.data.response !== '') {
      commit('SET_MAXPAGE', Math.ceil(result.data.total / 12));
      commit('SETCOMMODITYlIST', result.data.response);
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
        console.log(result.data);
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
}) => {
  const uuid = window.$cookies.get('JewelryUuid');
  getJewelryInfo(uuid).then(result => {
    if (result.data !== '') {
      commit('SET_JEWELRYINFO', result.data);
    }
  });
};

// 加入购物车
export const addToCart = ({
  commit
}) => {
  return new Promise(resole => {
    addCart.thrn(result => {
      if (result.data !== '') {
        console.log(result.data)
      }
    })
  })
}
// 获取商品列表 end============================================================

// 获取购物车 start============================================================
export const LoadCart = ({
  commit
}) => {
  getCart().then(result => {
    if (result.data !== '') {
      console.log(result.data.cartCommodityVOList);
    }
  });
};

export const addToOrder = ({
  commit
}) => {
  return new Promise(resolve => {
    buy().then(result => {
      if (result.data !== '') {
        console.log(result.data)
      }
    })
  })
}
export const dCart = ({
  commit
}) => {
  return new Promise(resole => {
    deteleCart.thrn(result => {
      if (result.data !== '') {
        console.log(result.data)
      }
    })
  })
}
// 获取购物车 end============================================================

// 获取订单 start============================================================
export const LoadOrder = ({
  commit
}) => {
  getOrder().then(result => {
    if (result.data !== '') {}
  });
};
// 获取订单 end============================================================

// 添加收货人信息 start============================================================
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
// 添加收货人信息 end============================================================

// 退出
export const signOut = ({
  commit
}) => {
  commit('SET_USER_INFO', '');
  window.$cookies.remove('accessToken');
  window.$cookies.remove('account');
  commit('IS_LOGIN', false);
};
