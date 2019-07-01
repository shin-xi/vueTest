/* eslint-disable no-undef */

export default {
  data () {
    return {
      mapView: null, // 地图实例
      heatmap: null, // 热力图实例
      mapOption: { // 地图配置
        resizeEnable: true, // 是否监控地图容器尺寸变化
        zoom: 11, // 初始化地图层级
        zooms: [3, 20], // 地图层级范围限制
        center: [116.418261, 39.921984],
        features: ['bg', 'road', 'building', 'point'], // 'bg', 'road', 'building', 'point'
        // mapStyle: 'amap://styles/5643108c75d1018f51b6fa1aa6dc9b03', // 地图样式
        mapStyle: 'amap://styles/fresh',
        viewMode: '3D',
        pitch: 0 // 倾斜角
      }
    }
  },
  methods: {
    mapInit (dom, option = this.mapOption) {
      this.mapView = new AMap.Map(dom, option)
      this.mapView.on('click', (ev) => {
        console.log(ev)
      })
    },
    heatmapInit () {
      this.heatmap = new AMap.Heatmap(this.mapView, {
        radius: 25, // 给定半径
        opacity: [0, 0.8],
        gradient: {
          0.5: 'blue',
          0.65: 'rgb(117,211,248)',
          0.7: 'rgb(0, 255, 0)',
          0.9: '#ffea00',
          1.0: 'red'
        },
        '3d': {
          // 热度转高度的曲线控制参数，可以利用左侧的控制面板获取
          // heightBezier: [0.4, 0.2, 0.4, 0.8],
          // 取样精度，值越小，曲面效果越精细，但同时性能消耗越大
          // gridSize: 2,
          heightScale: 0.01
        }
      })
    },
    setHeatmap (heatmapData) {
      this.heatmap.setDataSet({
        data: heatmapData.filter(v => v.count > 0)
        // max: 100 // 其中max不填则取数据集count最大值
      })
    }
  }
}
