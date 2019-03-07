<template>
    <div>
        <div ref="map" style="width: 100px;height: 100px;"></div>
    </div>
</template>

<script>
export default {
  name: 'myMap',
  mounted () {
    this.map = new AMap.Map(this.$refs.map, {
      viewMode: '2D',
      zoom: 14,
      center: [121.452481, 31.248612],
      zoomEnable: false,
      mapStyle: 'amap://styles/d231bda4ae877eaec0686c62f4e34a33' // 样式URL
    })
  }
}
</script>

<style scoped>

</style>
