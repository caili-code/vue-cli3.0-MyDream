import {fetch} from '../utils/request'


export function login1(params) {
	return fetch('/api/LoginCheck', params
		)
}
