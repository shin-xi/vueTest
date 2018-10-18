import Demo from '@/views/Demo'
import lifeCycle from '@/components/Demo/lifeCycle'
import computed from '@/components/Demo/computed'
import watch from '@/components/Demo/watch'
import modifier from '@/components/Demo/modifier'
import prop from '@/components/Demo/prop'
import event from '@/components/Demo/event'
import slot from '@/components/Demo/slot'

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
      }
    ]
  }
]

export default demo
