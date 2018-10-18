<template>
    <div ref="msg">{{message}}</div>
</template>

<script>
export default {
  name: 'lifeCycle_child',
  data () {
    return {
      message: 'Vue的生命周期'
    }
  },
  beforeCreate () {
    console.group('child: ------beforeCreate创建前状态------')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el) // undefined
    console.log('%c%s', 'color:red', 'data   : ' + this.$data) // undefined
    console.log('%c%s', 'color:red', 'message: ' + this.message) // undefined
  },
  created () {
    console.group('child: ------created创建完毕状态------')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el) // undefined
    console.log('%c%s', 'color:green', 'data   : ' + this.$data) // 已被初始化
    console.log('%c%s', 'color:green', 'message: ' + this.message) // 已被初始化
  },
  beforeMount () {
    console.group('child: ------beforeMount挂载前状态------')
    console.log('%c%s', 'color:red', 'el     : ' + (this.$el)) // undefined
    console.log('%c%s', 'color:green', 'data   : ' + this.$data) // 已被初始化
    console.log('%c%s', 'color:green', 'message: ' + this.message) // 已被初始化
  },
  mounted () {
    console.group('child: ------mounted 挂载结束状态------')
    console.log('%c%s', 'color:green', 'el     : ' + this.$el) // 已被初始化
    console.log('%c%s', 'color:green', 'data   : ' + this.$data) // 已被初始化
    console.log('%c%s', 'color:green', 'message: ' + this.message) // 已被初始化

    setInterval(() => {
      this.message = 'Hello world!'
    }, 1000)
  },
  beforeUpdate () {
    console.log('child: beforeUpdate 更新前状态===============》')
    console.log('%c%s', 'color:green', 'el          : ' + this.$el)
    console.log('%c%s', 'color:green', 'data        : ' + this.$data)
    console.log('%c%s', 'color:green', 'message     : ' + this.message)
    console.log('%c%s', 'color:yellow', 'messageDom  : ' + this.$refs.msg.innerText)
  },
  updated () {
    console.log('child: updated 更新完成状态===============》')
    console.log('%c%s', 'color:green', 'el          : ' + this.$el)
    console.log('%c%s', 'color:green', 'data        : ' + this.$data)
    console.log('%c%s', 'color:green', 'message     : ' + this.message)
    console.log('%c%s', 'color:yellow', 'messageDom  : ' + this.$refs.msg.innerText)
  },
  beforeDestroy () {
    console.log('child : beforeDestroy 销毁前状态===============》')
    console.log('%c%s', 'color:green', 'el     : ' + this.$el)
    console.log('%c%s', 'color:green', 'data   : ' + this.$data)
    console.log('%c%s', 'color:green', 'message: ' + this.message)
  },
  destroyed () {
    console.log('child : destroyed 销毁完成状态===============》')
    console.log('%c%s', 'color:green', 'el     : ' + this.$el)
    console.log('%c%s', 'color:green', 'data   : ' + this.$data)
    console.log('%c%s', 'color:green', 'message: ' + this.message)
    console.groupEnd()
    console.groupEnd()
    console.groupEnd()
    console.groupEnd()
  }
}
</script>

<style scoped>

</style>
