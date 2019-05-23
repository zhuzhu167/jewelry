import axios from 'axios';
import store from '@/vuex/store';

var instance = axios.create( // 常见请求实例配置项
  {
    baseURL: 'https://jewelry-api-dev.ykthink.cn' // 基础URL
  });

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const token = window.$cookies.get('accessToken');
    if (token) {
      config.headers = {
        'X-Access-Token': token
        // 'Content-Type': 'application/json;charset=UTF-8'
      };
      console.log(token);
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么

    return response;
  },
  (error) => {
    // 对响应错误做点什么
    store.state.errorMess = error.response.data.error.message;
    store.state.errorpopupSwitch = true;
  }
);
// 最后暴露实例
export default instance;