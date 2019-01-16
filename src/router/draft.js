import Draft from '@/views/Draft'
import father from '@/components/Draft/father'
import amap from '@/components/Draft/amap'

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
      }
    ]
  }
]

export default draft
