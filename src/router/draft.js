import Draft from '@/views/Draft'
import father from '@/components/Draft/father'
import amap from '@/components/Draft/amap'
import trySomething from '@/components/Draft/trySomething'
import cities from '@/components/Draft/cities'
import excel from '@/components/Draft/excel'
import cropper from '@/components/Draft/cropper'

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
      },
      {
        path: 'cities',
        component: cities
      },
      {
        path: 'excel',
        component: excel
      },
      {
        path: 'cropper',
        component: cropper
      }
    ]
  }
]

export default draft
