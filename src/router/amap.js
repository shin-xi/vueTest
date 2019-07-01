import Amap from '@/views/Amap'
import heatmap from '@/components/Amap/heatmap'

const draft = [
  {
    path: '/amap',
    component: Amap,
    children: [
      {
        path: 'heatmap',
        component: heatmap
      }
    ]
  }
]

export default draft
