import Vue from 'vue'
import App from '../App.vue'
import router from '../router'
import store from '../store'
import '../registerServiceWorker'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueWaypoint from 'vue-waypoint'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper /* { default global options } */)
Vue.use(ElementUI)
Vue.use(VueWaypoint)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
