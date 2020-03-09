import Vue from 'vue'
import App from './App.vue'
import Router from './router/webRoute'
import VueResource from "vue-resource";

Vue.config.productionTip = false
Vue.prototype.eventHub = new Vue()
Vue.use(VueResource)


var router = new Router()
new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')
 

/*  new Vue({
  el: '#app',
  router,
  render: h => h(App),
  template: '<App/>',
  components: { App }
}) */
