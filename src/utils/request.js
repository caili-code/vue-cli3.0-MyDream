/**
 * Created by superman on 17/2/16.
 * http配置
 */

import axios from 'axios'
import store from '../store/index.js'


// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  },
)

// http response 拦截器
axios.interceptors.response.use(
)

export default axios