<template>
  <div style="position: relative;">
    <template v-for="(item,index) of link">
      <span v-if="!!index" :key="index"> | </span>
      <router-link :key="`link${index}`" :to="item.to">{{ item.description }}</router-link>
    </template>

    <div style="margin-top: 20px;width: 800px;height: 400px;">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Amap',
  data() {
    return {
      link: [
        { to: '/amap/heatmap', description: '热力图' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
