import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './style/global.css'
import axios from 'axios';
import vueAxios from 'vue-axios';
Vue.use(vueAxios,axios);//Vue.axios/this.axios/this.$http使用axios，一次封装方便协作规范

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
