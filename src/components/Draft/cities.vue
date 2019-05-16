<template>
    <div>
        <el-cascader size="large"
                     :options="_options"
                     v-model="selectedOptions"
                     @change="handleChange"
                     clearable>
        </el-cascader>
    </div>
</template>

<script>
import { provinceAndCityData } from 'element-china-area-data'

console.log(provinceAndCityData)

export default {
  name: 'cities',
  data () {
    return {
      options: provinceAndCityData.filter(v => v.label !== '北京市'),
      selectedOptions: []
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

<style scoped>

</style>
