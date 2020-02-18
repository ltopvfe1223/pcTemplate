// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// store 状态管理
import store from './store'

import { post, get, patch, put, del } from './fetch/http'
import { apiUrl } from './fetch/apiUrl'
import sessionStorageHandler from './util/sessionStorageHandler'   // sessionStorage管理类
import localStorageHandler from './util/localStorageHandler'   // localStorage管理类
import utils from './util/utils'

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import $ from 'jquery'
// 兼容IE9
import 'babel-polyfill'

Vue.use(ElementUI);

//定义全局变量
Vue.prototype.$apiUrl = apiUrl;
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
Vue.prototype.$del = del;
Vue.prototype.SSH = sessionStorageHandler   // 挂载一个sessionStorage的操作类到Vue
Vue.prototype.LSH = localStorageHandler   // 挂载一个localStorage的操作类到Vue
Vue.prototype.utils = utils

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
