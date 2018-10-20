import Demo from '@/views/Demo'
import lifeCycle from '@/components/Demo/lifeCycle'
import computed from '@/components/Demo/computed'
import watch from '@/components/Demo/watch'
import modifier from '@/components/Demo/modifier'
import prop from '@/components/Demo/prop'
import event from '@/components/Demo/event'
import slot from '@/components/Demo/slot'
import dynCom from '@/components/Demo/dynCom'
import asyCom from '@/components/Demo/asyCom'
import edgeCase from '@/components/Demo/edgeCase'
import recCom from '@/components/Demo/recCom'
import treeCom from '@/components/Demo/treeCom'
import trans from '@/components/Demo/transition'
import transList from '@/components/Demo/transList'

const demo = [
  {
    path: '/demo',
    component: Demo,
    children: [
      {
        path: 'lifeCycle',
        component: lifeCycle
      },
      {
        path: 'computed',
        component: computed
      },
      {
        path: 'watch',
        component: watch
      },
      {
        path: 'modifier',
        component: modifier
      },
      {
        path: 'prop',
        component: prop
      },
      {
        path: 'event',
        component: event
      },
      {
        path: 'slot',
        component: slot
      },
      {
        path: 'dynCom',
        component: dynCom
      },
      {
        path: 'asyCom',
        component: asyCom
      },
      {
        path: 'edgeCase',
        component: edgeCase
      },
      {
        path: 'recCom',
        component: recCom
      },
      {
        path: 'treeCom',
        component: treeCom
      },
      {
        path: 'trans',
        component: trans
      },
      {
        path: 'transList',
        component: transList
      }
    ]
  }
]

export default demo
