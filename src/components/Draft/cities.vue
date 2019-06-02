<template>
    <div>
        <el-cascader size="large"
                     :options="_options"
                     v-model="selectedOptions"
                     @change="handleChange"
                     clearable>
        </el-cascader>
        <hr>
        <div class="place">
            <div class="tab">地区选择：</div>
            <regionPIck :regionData="regionDataPlus" v-model="currentValue"/>
        </div>
    </div>
</template>

<script>
import { provinceAndCityData, regionDataPlus } from 'element-china-area-data'
import regionPIck from './regionPick'

// console.log(provinceAndCityData)

export default {
  name: 'cities',
  components: {
    regionPIck
  },
  data () {
    return {
      options: provinceAndCityData.filter(v => v.label !== '北京市'),
      selectedOptions: [],
      regionDataPlus,
      currentLabel: [],
      currentValue: []
    }
  },
  computed: {
    _options () {
      const _options = JSON.parse(JSON.stringify(provinceAndCityData))
      _options.unshift({ 'label': '全部', value: 0 })
      return _options
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>

<style scoped lang="scss">
    .place {
        display: flex;

        .tab {
            width: 300px;
        }
    }
</style>
