<template>
    <div>
        <div>{{name}}</div>
        <div>{{status}}</div>
    </div>
</template>

<script>

export default {
  name: 'prop_child',
  inheritAttrs: false, // 禁用父组件属性设置
  props: {
    name: {
      type: String,
      default: ''
    },
    status: {
      validator (v) {
        return ['success', 'warning', 'danger'].indexOf(v) !== -1
      }
    }
  }
}
</script>

<style scoped>

</style>
