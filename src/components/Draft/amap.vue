<template>
    <div class="container">
        <div class="map" ref="map"></div>
    </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: 'amap',
  data () {
    return {
      map: null,
      center: [121.461642, 31.206598],
      overlayGroup: null,
      a: 0
    }
  },
  methods: {
    addMarker () {
      // this.overlayGroup.getOverlays() && this.map.remove(this.overlayGroup.getOverlays())
      this.overlayGroup && this.overlayGroup.clearOverlays()

      const marker = new AMap.Marker({
        icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
        position: this.center
      })

      this.overlayGroup.addOverlay(marker)

      marker.on('click', (e) => {
        alert('点击了marker')
      })

      if (this.a >= 1) {
        this.overlayGroup.hide()
      }

      this.a++
    }
  },
  mounted () {
    this.map = new AMap.Map(this.$refs.map, {
      center: this.center,
      zoom: 18,
      pitch: 55,
      viewMode: '3D',
      mapStyle: 'amap://styles/d231bda4ae877eaec0686c62f4e34a33'// 样式URL
    })

    this.overlayGroup = new AMap.OverlayGroup()
    this.overlayGroup.setMap(this.map)

    this.map.on('complete', this.addMarker)
    setTimeout(this.addMarker, 3000)

    this.map.on('click', (e) => {
      alert('点击了地图')
    })
  }
}
</script>

<style scoped lang="scss">
    .container {
        width: 800px;
        height: 600px;
    }

    .map {
        width: 100%;
        height: 100%;
    }
</style>
