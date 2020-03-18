import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/Login.vue'
import home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [{
		path: '/login',
		hidden: true,
		component: login,
	},
	{
		path: '/',
		hidden: true,
		redirect: '/login'

	},
	{
		path: '/Home',
		hidden: true,
		component: home,
		meta: {
			requireAuth: true
		}

	}
]

const router = new VueRouter({
	mode: 'hash', // 去掉url中的#
	scrollBehavior: () => ({ y: 0 }),
	routes
})

export default router
