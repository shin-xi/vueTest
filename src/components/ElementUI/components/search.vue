<template>
    <div>
<!--        <chinaAreaData-->
        <!--                :defaultPlaceCodes="['440000000000','440100000000']"-->
        <!--                common-service-url="http://10.20.100.228:5050/pre/region_code/static/chinaAreaDataCountyAll_2018.js"-->
        <!--                :locate-current-city="false"-->
        <!--                :chinaAreaDataCodes.sync="chinaAreaDataCodes"-->
        <!--                :chinaAreaDataNames.sync="chinaAreaDataNames"/>-->
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
  name: 'search',
  components: {
    chinaAreaData
  },
  data () {
    return {
      chinaAreaDataCodes: [],
      chinaAreaDataNames: []
    }
  }
}
</script>

<style scoped>

</style>
