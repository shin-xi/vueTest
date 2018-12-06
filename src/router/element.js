import element from '@/views/Element'
import father from '@/components/ElementUI/father'

const demoVuexRouter = [
  {
    path: '/element',
    component: element,
    children: [
      {
        path: 'father',
        component: father
      }
    ]
  }
]

export default demoVuexRouter
