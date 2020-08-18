import element from '@/views/Element'
import father from '@/components/ElementUI/father'
import container from '@/components/ElementUI/container'
import button from '@/components/ElementUI/button'
import input from '@/components/ElementUI/input'
import cascader from '@/components/ElementUI/cascader'
import table from '@/components/ElementUI/table'
import loading from '@/components/ElementUI/loading'
import dialog from '@/components/ElementUI/dialog'
import upload from '@/components/ElementUI/upload'
import scrollbar from '@/components/ElementUI/scrollbar'
import tree from '@/components/ElementUI/tree'

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
      },
      {
        path: 'dialog',
        component: dialog
      },
      {
        path: 'upload',
        component: upload
      },
      {
        path: 'scrollbar',
        component: scrollbar
      },
      {
        path: 'tree',
        component: tree
      }
    ]
  }
]

export default demoVuexRouter
