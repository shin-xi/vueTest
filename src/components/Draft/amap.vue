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
      a: 0,
      marker: null
    }
  },
  watch: {
    marker (nv) {
      if (nv) {
        this.overlayGroup && this.overlayGroup.clearOverlays()

        nv.forEach((v) => {
          const marker = new AMap.Marker({
            position: new AMap.LngLat(v.lng, v.lat),
            icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png'
          })

          marker.on('click', () => alert('点击了marker'))

          this.overlayGroup.addOverlay(marker)
        })
      }
    }
  },
  mounted () {
    this.map = new AMap.Map(this.$refs.map, {
      viewMode: '3D',
      zooms: [16, 18],
      zoom: 17,
      pitch: 45,
      center: this.center,
      zoomEnable: true,
      features: ['bg', 'point', 'road'],
      mapStyle: 'amap://styles/d231bda4ae877eaec0686c62f4e34a33' // 样式URL
    })

    this.overlayGroup = new AMap.OverlayGroup()
    this.overlayGroup.setMap(this.map)

    this.map.on('click', (e) => {
      alert('点击了地图')
    })

    this.marker = [
      { lng: 121.461642, lat: 31.206598 }
    ]

    setTimeout(() => {
      this.overlayGroup.hide()
    }, 3000)
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
