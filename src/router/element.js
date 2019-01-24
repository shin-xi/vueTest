import element from '@/views/Element'
import father from '@/components/ElementUI/father'
import container from '@/components/ElementUI/container'
import button from '@/components/ElementUI/button'
import input from '@/components/ElementUI/input'
import cascader from '@/components/ElementUI/cascader'
import table from '@/components/ElementUI/table'
import loading from '@/components/ElementUI/loading'

const demoVuexRouter = [
  {
    path: '/element',
    component: element,
    children: [
      {
        path: 'father',
        component: father
      },
      {
        path: 'container',
        component: container
      },
      {
        path: 'button',
        component: button
      },
      {
        path: 'input',
        component: input
      },
      {
        path: 'cascader',
        component: cascader
      },
      {
        path: 'table',
        component: table
      },
      {
        path: 'loading',
        component: loading
      }
    ]
  }
]

export default demoVuexRouter
