// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mallIndex from './mall/mallIndex.vue'
import "../node_modules/element-ui/element-ui.style.min.css"
import ElementUI from "../node_modules/element-ui/element-ui.min"

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, mallIndex},
  template: '<App/>'
})
