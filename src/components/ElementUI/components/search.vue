<template>
  <div>
    <chinaAreaData
      :defaultPlaceCodes="['310000000000','310110000000']"
      myPlaceholder="所在省"
      :allOption="['所在省','全部','全部']"
      :level="3"
      :whiteList="whiteList"
      :locate-current-city="false"
      :chinaAreaDataCodes.sync="chinaAreaDataCodes"
      :chinaAreaDataNames.sync="chinaAreaDataNames"
      common-service-url="http://10.20.100.228:5050/pre/region_code/static/chinaAreaDataCountyAll_2018.js"/>
  </div>
</template>

<script>
import chinaAreaData from '../components/chinaAreaData'
// import chinaAreaData from 'ws-china-area-data/components/chinaAreaData'
// import { transCodeToText } from 'ws-china-area-data/utils/index'

// console.log(transCodeToText(window.provinceAndCityAndDistrictData))

// setInterval(() => {
//   if (window.provinceAndCityAndDistrictData) {
//     console.log(transCodeToText(window.provinceAndCityAndDistrictData))
//   }
// }, 2000)

import { wxChinaAreaData } from '../utils/wxChinaAreaData'

console.log(wxChinaAreaData)

export default {
  name: 'Search',
  components: {
    chinaAreaData
  },
  data() {
    return {
      chinaAreaDataCodes: [],
      chinaAreaDataNames: [],
      whiteList: ['310000000000']
    }
  }
}
</script>

<style scoped>

</style>
