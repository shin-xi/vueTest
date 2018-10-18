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
      }
    ]
  }
]

export default demo
