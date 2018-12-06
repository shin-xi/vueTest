<template>
    <el-input
            placeholder="请输入内容"
            v-model="input11" @input="change"
            clearable>
    </el-input>
</template>

<script>
export default {
  name: 'myInput',
  props: {
    input1: {
      type: String,
      default: ''
    }
  },
  model: {
    prop: 'input1',
    event: 'input1'
  },
  data () {
    return {
      input11: this.input1
    }
  },
  methods: {
    change (val) {
      this.$emit('input1', val)
    }
  }
}
</script>

<style scoped>

</style>
