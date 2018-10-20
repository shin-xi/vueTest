import Router from '@/views/Router'
import dynRouter from '@/components/Router/dynRouter'
import namedRouter from '@/components/Router/namedRouter'
import nameDefault from '@/components/Router/nameDefault'
import nameA from '@/components/Router/nameA'
import nameB from '@/components/Router/nameB'

const demoRouter = [
  {
    path: '/router',
    component: Router,
    children: [
      {
        path: 'dynRouter',
        component: dynRouter
      },
      {
        path: 'dynRouter/:id',
        name: 'dynRouterId',
        props: true,
        component: dynRouter
      },
      {
        path: 'namedRouter',
        name: 'namedRouter',
        component: namedRouter,
        children: [
          {
            path: '/',
            components: {
              default: nameDefault,
              a: nameA,
              b: nameB
            }
          },
          {
            path: 'ab',
            components: {
              a: nameA,
              b: nameB
            }
          }
        ]
      }
    ]
  }
]

export default demoRouter
