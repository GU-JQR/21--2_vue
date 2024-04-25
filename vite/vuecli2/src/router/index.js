import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mallIndex from '../mall/mallIndex.vue'
import home from '../mall/pages/home.vue'
import goods from '../mall/pages/goods.vue'
import adv from '../mall/pages/adv.vue'
import error from '../mall/pages/error.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // path: '/',
      // name: 'mallIndex',
      // component: mallIndex,
      // children:[
      //   {
      //     path:'',
      //     name:'home',
      //     component:home
      //   }
      // ]
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path:'/goods',
      component:goods
    },
    {
      path:'/adv',
      component:adv
    },
    {
      path:'*',
      component:error
    }
  ]
})
