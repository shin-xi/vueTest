<template>
  <div>
    <!--    <el-date-picker-->
    <!--      v-model="value1"-->
    <!--      type="datetime"-->
    <!--      placeholder="选择日期时间"/>-->

    <chinaAreaData
      ref="wsChinaAreaData"
      :showAllLevels="false"
      :disabled="false"
      :locateCurrentCity="false"
      v-model="codes"
      :allOption="['所在省','全部','全部']"
      :level="3"
      :chinaAreaDataNames.sync="ruleForm.areaNames"
      clearable
      myPlaceholder="所在省"
      common-service-url="http://10.20.100.252:5050/static/chinaAreaDataCountyAll_2019.js"
      @change="changeCode"/>

    <!--    <el-button type="primary" @click="reset">清空</el-button>-->
    <hr>

    <!--    <el-form ref="ruleForm" :model="ruleForm" :rules="rules">-->
    <!--      <el-form-item prop="curtName">-->
    <!--        <el-input-->
    <!--          v-model.trim="ruleForm.curtName"-->
    <!--          type="text"-->
    <!--          placeholder="请录入法院名称"-->
    <!--        />-->
    <!--      </el-form-item>-->

    <!--      <el-form-item prop="areaNames">-->
    <!--    <chinaAreaData-->
    <!--      :defaultPlaceCodes="['310000000000','310110000000']"-->
    <!--      :allOption="['所在省','全部','全部']"-->
    <!--      :level="3"-->
    <!--      :locate-current-city="false"-->
    <!--      :chinaAreaDataCodes.sync="ruleForm.areaCodes"-->
    <!--      :chinaAreaDataNames.sync="ruleForm.areaNames"-->
    <!--      myPlaceholder="所在省"-->
    <!--      common-service-url="http://10.20.100.228:5050/pre/region_code/static/chinaAreaDataCountyAll_2018.js"/>-->
    <!--    <el-button type="primary" @click="demo">buttonCont</el-button>-->
    <!--      </el-form-item>-->
    <!--    </el-form>-->
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
import { rules } from './utils/rules'

console.log(wxChinaAreaData)

export default {
  name: 'Search',
  components: {
    chinaAreaData
  },
  data() {
    return {
      value1: '',
      chinaAreaDataCodes: [],
      chinaAreaDataNames: [],
      whiteList: ['310000000000'],
      rules,
      ruleForm: {
        curtName: '',
        areaCodes: [],
        areaNames: []
      },
      codes: ['310000000000', '310100000000', '']
    }
  },
  watch: {
    'ruleForm.curtName': {
      handler(nv) {
        console.log('watch.curtName', nv)
      },
      immediate: true
    },
    'ruleForm.areaNames': {
      handler(nv, ov) {
        console.log('watch.areaNames', nv, ov)
      },
      immediate: true
    }
  },
  mounted() {
    // this.$refs.wsChinaAreaData.chinaAreaDataCodes = ['310000000000', '310100000000', '']

    // setTimeout(() => {
    //   this.codes = ['310000000000', '310100000000', '310105000000']
    // }, 5000)
  },
  methods: {
    demo() {
      this.ruleForm.areaNames = []
    },
    reset() {
      this.$refs.wsChinaAreaData.reset()
    },
    changeCode(data) {
      console.log('changeCode', data)
    }
  }
}
</script>

<style scoped>

</style>
