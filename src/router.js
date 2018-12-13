import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Demo from '@/router/demo'
import demoRouter from '@/router/demoRouter'
import demoVuex from '@/router/demoVuex'
import swiper from '@/components/Swiper/container'
import element from '@/router/element'
import draft from '@/router/draft'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue') // 异步组件
    },
    ...Demo,
    ...demoRouter,
    ...demoVuex,
    {
      path: '/swiper',
      component: swiper
    },
    ...element,
    ...draft
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // console.log('我是全局路由守卫beforeEach')
  // console.log(to, from)
  next()
})

router.beforeResolve((to, from, next) => {
  // console.log('我是全局路由守卫beforeResolve')
  // console.log(to, from)
  next()
})

router.afterEach((to, from) => {
  // console.log('我是全局路由守卫afterEach')
  // console.log(to, from)
})

router.scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) { // 可以统一设置回顶操作
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

export default router
