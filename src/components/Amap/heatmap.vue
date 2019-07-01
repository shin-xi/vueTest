<template>
    <div ref="map" class="container_heatmap"></div>
</template>

<script>
import mapView from './mapView'
import heatmapData from './heatmapData'

export default {
  name: 'heatmap',
  mixins: [mapView],
  props: {
    heatmapData: {
      type: Array,
      default () {
        return heatmapData // 热力图数据结构
      }
    }
  },
  mounted () {
    this.mapInit(this.$refs.map, this.mapOption)
    this.heatmapInit()
    this.$nextTick(_ => {
      this.setHeatmap(JSON.parse(JSON.stringify(this.heatmapData)))
    })
  }
}
</script>

<style scoped lang="scss">
    .container_heatmap {
        width: 100%;
        height: 100%;
        min-width: 200px;
        min-height: 100px;
    }
</style>
