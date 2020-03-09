import Vue from 'vue'
import VueRouter from 'vue-router'
import Url from './url.json'

Vue.use(VueRouter)

function Router () {

  const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '',
        component: () => import('@/components/Home')
      },
      {
        path: Url['Home'],
        name: 'Home',
        component: () => import('@/components/Home')
      },
      {
        path: Url['Q3'],
        name: 'Q3',
        component: () => import('@/views/Q3')
      },
      {
        path: Url['Q4'],
        name: 'Q4',
        component: () => import('@/views/Q4')
      },
      
      {
        path: '*',
        name: '404',
        component: () => import('@/404')
      }
    ]
  })

  router.beforeEach(function (to, from, next) {
    var scrollpx = 0
    var waitTime = 0    
    setTimeout(function () { window.scrollTo(0, scrollpx) }, waitTime)
    next()
  })
  return router
}

export default Router
