import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

window.router = router;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
