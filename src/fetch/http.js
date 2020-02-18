import axios from 'axios';
import SSH from '../util/sessionStorageHandler';
import utils from '../util/utils';
import { Message, Loading } from 'element-ui';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 配置前缀引用
axios.defaults.timeout = 50000000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = '/api';

axios.interceptors.request.use(
    config => {
       
        let token = localStorage.getItem('token')  ; // 获取token
        if(token != null){                          // 如果token不为null，否则传token给后台
            config.headers.Authorization= token;
        }
        NProgress.start();
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

//http response 拦截器
axios.interceptors.response.use((res) => {
    NProgress.done();
    let {data} = res
    if (data.message === 'token failure!') {    // 如果后台返回的错误标识为token过期，则重新登录
       localStorage.removeItem('token')          // token过期，移除token
          // 进行重新登录操作
    } else {
         return Promise.resolve(res)
    }
}, (error) => {
    NProgress.done();
   
    return Promise.reject(error);
});


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                if (response) {
                    resolve(response.data);
                }
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params)
            .then(response => {
                if (response) {
                    resolve(response.data);
                }
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

/**
 * 封装del请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function del(url, params) {
    return new Promise((resolve, reject) => {
        axios.delete(url, { data: params })
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

