<template>
  <!--还不明白-->
  <label>
    {{ label }}
    <input
      v-bind="$attrs"
      :value="value"
      v-on="inputListeners"
    >
  </label>
</template>

<script>
/* eslint-disable */
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: ['label', 'value'],
  computed: {
    inputListeners() {
      const vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function(event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
