import VuexMain from '@/views/Vuex'
import mapVuex from '@/components/Vuex/mapVuex'
import formBinding from '@/components/Vuex/formBinding'

const demoVuexRouter = [
  {
    path: '/vuex',
    component: VuexMain,
    children: [
      {
        path: 'mapVuex',
        component: mapVuex
      },
      {
        path: 'formBinding',
        component: formBinding
      }
    ]
  }
]

export default demoVuexRouter
