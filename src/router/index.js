import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/Login.vue'
import home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [{
		path: '/login',
		component: login,
	},
	{
		path: '/',
		redirect: '/login'
		
	},
	{
		path: '/Home',
		component: home,
		meta: {
			requireAuth:
			true}
		
	}
]

const router = new VueRouter({
	routes
})

export default router
