<template>
  <div class="container">
    <div class="block">
      <search/>

      <!--      <el-cascader-->
      <!--        v-model="value"-->
      <!--        :options="options"-->
      <!--        placeholder="全部偏好类型"-->
      <!--        @change="handleChange"/>-->
    </div>
  </div>
</template>

<script>
import search from './components/search'

export default {
  name: 'MyCascader',
  components: {
    search
  },
  data() {
    return {
      value: [],
      options: [
        {
          value: 1,
          label: '债权转让',
          children: [
            { value: -1, label: '全部' },
            { 'value': 1, 'label': '不良资产包' },
            { 'value': 2, 'label': '单体项目' },
            { 'value': 3, 'label': '实物资产' }
          ]
        },
        {
          value: 2,
          label: '司法拍卖',
          children: [
            { value: -1, label: '全部' },
            { 'value': 4, 'label': '民用房产' },
            { 'value': 5, 'label': '商业房产' },
            { 'value': 6, 'label': '工业房产' },
            { 'value': 7, 'label': '其他房产' }
          ]
        }
      ]
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
}
</script>

<style scoped lang="scss">
    .container {
        width: 1000px;

        .block {
            float: left;
            position: relative;
        }
    }
</style>
