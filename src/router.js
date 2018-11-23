import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import gongying from './views/gongying.vue'
import fabugongying from "./views/fabugongying.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
          path: '/a',
          name: 'gongying',
          component: gongying,
      },
      {
          path: '/f',
          name: 'fabugongying',
          component: fabugongying,
      },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
      {
      path:'/lo',
      name:'hello',
     // component:() => import('./components/Hello.vue')
      },
  ]
})
