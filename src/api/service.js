import service from '../utils/request'

//登录查询
export function login(params) {
	return service({
		method: 'post',
		url: '/api/login',
		params: params
	})
}
//返回验证码
export function getCodeImg() {
	return service({
		method:'get',
		url: '/api/captchaImage'

	})
}
