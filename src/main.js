import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'

import './promission'
import './icons' // icon

import '@/styles/index.scss' // global css

Vue.config.productionTip = false;

window.router = router;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
