import service from '../utils/request'
export function login() {
	return service.get('/api/TestToken', {
			params: {
			}
		})
		.then(function(response) {
			console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		});
}
