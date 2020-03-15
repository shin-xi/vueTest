<template>
  <div>
    <div>{{ name }}</div>
    <div>{{ status }}</div>
  </div>
</template>

<script>

export default {
  name: 'PropChild',
  inheritAttrs: false, // 禁用父组件属性设置
  props: {
    name: {
      type: String,
      default: ''
    },
    status: {
      type: Boolean,
      default: false,
      validator(v) {
        return ['success', 'warning', 'danger'].indexOf(v) !== -1
      }
    }
  }
}
</script>

<style scoped>

</style>
