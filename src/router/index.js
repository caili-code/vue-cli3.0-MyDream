import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/Login.vue'
import home from '../views/Home.vue'
import test from '../views/test.vue'
import test1 from '../views/test1.vue'
Vue.use(VueRouter)

const routes = [{
		path: '/login',
		hidden: true,
		component: login,
	},
	{
		path: '/',
		hidden: true,
		redirect: '/home'

	},
	{
		path: '/Home',
		hidden: true,
		component: home,
		children: [{
			path: '/test',
			name: '/test',
			component: test,
		}, {
			path: '/test1',
			name: '/test1',
			component: test1,
		}]

	}
]

const router = new VueRouter({
	mode: 'hash', // 去掉url中的#
	scrollBehavior: () => ({
		y: 0
	}),
	routes
})

export default router
