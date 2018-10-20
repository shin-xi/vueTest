<template>
    <div>
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
    '$route' (to, from) {
      // console.log(to)
      // console.log(from)
      // 对路由变化作出响应...
    }
  },
  mounted () { // 不会销毁组件 所以需要监听router
    console.count('dynRouter')

    setTimeout(() => {
      // this.$router.push({ name: 'dynRouterId', params: { id: 222 } })
    }, 2000)
  }
}
</script>

<style scoped>

</style>
