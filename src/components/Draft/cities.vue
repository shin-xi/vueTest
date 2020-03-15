<template>
  <div>
    <el-cascader
      :options="_options"
      v-model="selectedOptions"
      size="large"
      clearable
      @change="handleChange"/>
    <hr>
    <div class="place">
      <div class="tab">地区选择：</div>
      <regionPIck :regionData="regionDataPlus" v-model="currentValue"/>
    </div>
    <hr>
    <div class="place">
      <div class="tab">资产类型：</div>
      <regionPIck :regionData="assetTypeOption" v-model="assetValue"/>
    </div>
  </div>
</template>

<script>
import { provinceAndCityData, regionDataPlus } from 'element-china-area-data'
import regionPIck from './regionPick'

// console.log(provinceAndCityData)

export default {
  name: 'Cities',
  components: {
    regionPIck
  },
  data() {
    return {
      options: provinceAndCityData.filter(v => v.label !== '北京市'),
      selectedOptions: [],
      regionDataPlus,
      currentLabel: [],
      currentValue: [],
      assetTypeOption: [
        { 'value': 1, 'label': '住宅' },
        { 'value': 2, 'label': '别墅' },
        { 'value': 3, 'label': '商铺' },
        { 'value': 4, 'label': '写字楼' },
        { 'value': 5, 'label': '工业房地产' },
        { 'value': 6, 'label': '土地' },
        { 'value': 7, 'label': '厂房' },
        { 'value': 8, 'label': '其它' },
        { 'value': 9, 'label': '酒店' },
        { 'value': 10, 'label': '综合' }
      ],
      assetValue: []
    }
  },
  computed: {
    _options() {
      const _options = JSON.parse(JSON.stringify(provinceAndCityData))
      _options.unshift({ 'label': '全部', value: 0 })
      return _options
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
    .place {
        display: flex;

        .tab {
            width: 200px;
            font-size: 12px;
        }
    }
</style>
