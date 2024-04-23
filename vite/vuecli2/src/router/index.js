import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mallIndex from '../mall/mallIndex.vue'
import home from '../mall/pages/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mallIndex',
      component: mallIndex,
      children:[
        {
          path:'',
          name:'home',
          component:home
        }
      ]
    }
  ]
})
