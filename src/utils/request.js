import axios from 'axios'
import store from '../store/index.js'
import {Notification ,
	Message
} from 'element-ui'
//http request 拦截器
const service = axios.create({
	timeout: 5000 // 请求超时时间
})
service.interceptors.request.use(

	config => {

		// 登录流程控制中，根据本地是否存在token判断用户的登录情况
		// 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
		// 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
		// 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
		if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
			config.headers.authorization = store.state.token //请求头加上token
		}
		console.log('请求拦截')

		return config;
	},
	err => {
		console.log("请求拦截");
		return Promise.reject(err)
	}
)

//http response 拦截器
service.interceptors.response.use(res => {

	console.log("响应拦截")
	if(res.data.code!=200){
		Notification({
			message:res.data.msg,
			type:'error'
		})
	}else{
		return res.data;	
	}
}, error => {
	Message({
		message: error,
		type: 'error'
	})
	return Promise.reject(error)

})
// axios.interceptors.response.use(function (response) {
//     // 对响应数据做点什么
//     return response;
//   }, function (error) {
//     // 对响应错误做点什么

//     return Promise.reject(error);
//   });
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */


// export function fetch(url, params) {
// 	// return new Promise((resolve, reject) => {
// 	return service.get(url, {
// 		params: params
// 	})
// 	// .then(response => {
// 	// 	resolve(response.data);
// 	// })
// 	// .catch(err => {
// 	// 	reject(err)
// 	// })
// 	// })
// }


// /**
//  * 封装post请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */

// export function post(url, params) {
// 	return
// 	service.post(url, {
// 		params: params
// 	})
// }

// /**
//  * 封装patch请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */

// export function patch(url, data = {}) {
// 	return new Promise((resolve, reject) => {
// 		axios.patch(url, data)
// 			.then(response => {
// 				resolve(response.data);
// 			}, err => {
// 				reject(err)
// 			})
// 	})
// }

// /**
//  * 封装put请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */

// export function put(url, data = {}) {
// 	return new Promise((resolve, reject) => {
// 		axios.put(url, data)
// 			.then(response => {
// 				resolve(response.data);
// 			}, err => {
// 				reject(err)
// 			})
// 	})
// }

export default service
