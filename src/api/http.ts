import axios from 'axios';
import store from '@/store';
import {
  PostUrlKeys,
  PostGlobalReq,
  GlobalRes,
  PostUrlMap,
  GetUrlKeys,
  GetGlobalReq,
  GetUrlMap,
} from './api';
import { message } from 'ant-design-vue';

const http = axios.create({
  baseURL: '', // TODO 生产环境添加
  timeout: 60000,
});
http.interceptors.request.use(
  config => {
    store.commit('setLoadingShow', true);
    config.headers['X-CSRF-TOKEN'] = localStorage.getItem('user')
      ? localStorage.getItem('user')
      : '';
    if (config.method === 'post') {
      const data = config.data || {};
      config.data = data;
    }
    if (config.method === 'get') {
      const data = config.params || {};
      config.params = data;
    }
    return config;
  },
  error => Promise.reject(error),
);
http.interceptors.response.use(
  response => {
    store.commit('setLoadingShow', false);
    return response.data;
  },
  error => {
    store.commit('setLoadingShow', false);
    console.log('err', error.response);
    if (error.response.status === 500) {
      message.error('服务器开小差了');
    }
    if (error.response.status === 401) {
      store.commit('clearUser');
    }
    return Promise.reject(error);
  },
);

export const get = <T extends GetUrlKeys>(url: T, data?: GetGlobalReq<T>['req']) =>
  /* eslint-disable no-async-promise-executor */
  new Promise<GetGlobalReq<T>['res']>(async (reslove, reject) => {
    const res: GlobalRes<GetGlobalReq<T>['res']> = await http.get(GetUrlMap[url], { params: data });
    switch (res.code) {
      case 200:
        reslove(res.data);
        break;
      default:
        message.error(res.msg);
        reject(res.msg);
    }
  });
export const post = <T extends PostUrlKeys>(url: T, data?: PostGlobalReq<T>['req']) =>
  /* eslint-disable no-async-promise-executor */
  new Promise<PostGlobalReq<T>['res']>(async (reslove, reject) => {
    const res: GlobalRes<PostGlobalReq<T>['res']> = await http.post(PostUrlMap[url], data);
    switch (res.code) {
      case 200:
        if (res.msg) {
          message.success(res.msg);
        }
        reslove(res.data);
        break;
      default:
        message.error(res.msg);
        reject(res.msg);
    }
  });
