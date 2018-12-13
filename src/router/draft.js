import Draft from '@/views/Draft'
import father from '@/components/Draft/father'

const draft = [
  {
    path: '/draft',
    component: Draft,
    children: [
      {
        path: 'father',
        component: father
      }
    ]
  }
]

export default draft
