<template>
  <el-input
    v-model="input11"
    placeholder="请输入内容"
    clearable
    @input="change"/>
</template>

<script>
export default {
  name: 'MyInput',
  model: {
    prop: 'input1',
    event: 'input1'
  },
  props: {
    input1: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      input11: this.input1
    }
  },
  methods: {
    change(val) {
      this.$emit('input1', val)
    }
  }
}
</script>

<style scoped>

</style>
