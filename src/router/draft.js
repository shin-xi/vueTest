import Draft from '@/views/Draft'
import father from '@/components/Draft/father'
import amap from '@/components/Draft/amap'
import trySomething from '@/components/Draft/trySomething'

const draft = [
  {
    path: '/draft',
    component: Draft,
    children: [
      {
        path: 'father',
        component: father
      },
      {
        path: 'amap',
        component: amap
      },
      {
        path: 'trySomething',
        component: trySomething
      }
    ]
  }
]

export default draft
