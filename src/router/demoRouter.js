import Router from '@/views/Router'
import dynRouter from '@/components/Router/dynRouter'
import namedRouter from '@/components/Router/namedRouter'
import nameDefault from '@/components/Router/nameDefault'
import nameA from '@/components/Router/nameA'
import nameB from '@/components/Router/nameB'
import indexRouter from '@/components/Router/indexRouter'
import routerScroll from '@/components/Router/routerScroll'

const demoRouter = [
  {
    path: '/router',
    component: Router,
    meta: {
      requiresAuth: true,
      index: 1.1
    },
    children: [
      {
        path: 'dynRouter',
        component: dynRouter,
        meta: {
          index: 1.2
        }
      },
      {
        path: 'dynRouter/:id',
        name: 'dynRouterId',
        props: true,
        component: dynRouter,
        meta: {
          index: 1.2
        }
      },
      {
        path: 'namedRouter',
        component: namedRouter,
        children: [
          {
            path: '/',
            components: {
              default: nameDefault,
              a: nameA,
              b: nameB
            },
            meta: {
              index: 1.3
            }
          },
          {
            path: 'ab',
            components: {
              a: nameA,
              b: nameB
            },
            meta: {
              index: 1.3
            }
          }
        ]
      },
      {
        path: 'indexRouter',
        component: indexRouter,
        meta: {
          index: 1.4
        }
      },
      {
        path: 'routerScroll',
        component: routerScroll,
        meta: {
          index: 1.4
        }
      }
    ],
    beforeEnter (to, from, next) {
      // console.log('我是独享路由守卫beforeEnter')
      // console.log(to, from)
      next()
    }
  }
]

export default demoRouter
