<template>
    <div>
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
  name: 'Router',
  data () {
    return {
      link: [
        { to: '/router/dynRouter', description: '动态路由（无参数）' },
        { to: '/router/dynRouter/123', description: '动态路由（123）' },
        { to: '/router/dynRouter/321', description: '动态路由（321）' },
        { to: '/router/namedRouter', description: '命名视图' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
