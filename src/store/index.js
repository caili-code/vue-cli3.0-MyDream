import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: {},
		token: null,
		title: ''
	},
	mutations: {
		login(state) {
			state.token;
		}
	},
	actions: {},
	modules: {}
})
