<template>
    <lifeCycleChild/>
</template>

<script>
import lifeCycleChild from '@/components/Demo/lifeCycleChild'

export default {
  name: 'lifeCycle',
  components: {
    lifeCycleChild
  },
  beforeCreate () {
    console.log('father: ------beforeCreate创建前状态------')
  },
  created () {
    console.log('father: ------created创建完毕状态------')
  },
  beforeMount () {
    console.log('father: ------beforeMount挂载前状态------')
  },
  mounted () {
    console.log('father: ------mounted 挂载结束状态------')
  },
  beforeDestroy () {
    console.groupEnd()
    console.groupEnd()
    console.groupEnd()
    console.groupEnd()
    console.log('father: beforeDestroy 销毁前状态===============》')
  },
  destroyed () {
    console.log('father: destroyed 销毁完成状态===============》')
  }
}
</script>

<style scoped>

</style>
