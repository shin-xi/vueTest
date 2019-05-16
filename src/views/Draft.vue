<template>
    <div style="position: relative;">
        <template v-for="(item,index) of link">
            <span v-if="!!index" :key="index"> | </span>
            <router-link :key="`link${index}`" :to="item.to">{{item.description}}</router-link>
        </template>

        <div style="margin-top: 50px;">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Draft',
  data () {
    return {
      link: [
        { to: '/draft/father', description: '居民组件' },
        { to: '/draft/amap', description: '高德地图' },
        { to: '/draft/trySomething', description: '试验' },
        { to: '/draft/cities', description: '城市选择' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
