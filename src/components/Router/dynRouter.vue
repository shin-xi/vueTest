<template>
    <div style="position: absolute;top: 100px;left: 0;">
        <div v-if="!!$route.params.id" key="id">{{$route.params.id}}</div>
        <div v-else key="id">无id</div>
        <div>props:{{id}}</div>
    </div>
</template>

<script>
export default {
  name: 'dynRouter',
  props: ['id'],
  watch: {
    '$route' (to, from) { // 2.路由开启props模式 可以改为监听props值
      // console.log(to)
      // console.log(from)
      // 对路由变化作出响应...
    }
  },
  mounted () { // 1.不会销毁组件 所以需要监听router
    // console.count('dynRouter')

    setTimeout(() => {
      // this.$router.push({ name: 'dynRouterId', params: { id: 222 } })
    }, 2000)
  }
}
</script>

<style scoped>

</style>
