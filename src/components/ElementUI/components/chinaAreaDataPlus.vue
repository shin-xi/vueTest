<template>
    <el-cascader calss="cascader_chinaAreaData"
                 :placeholder="placeholder"
                 :style="{width: `${width}px`}"
                 change-on-select
                 v-model="chinaAreaDataCodes"
                 :props="props"/>
</template>

<script>
/* eslint-disable no-undef */
import { cloneDeep } from 'lodash'
import axios from 'axios'
// import provinceAndCityAndDistrictData from '../json/provinceAndCityAndDistrictData'
// import CodeToText from '../json/CodeToText'

export default {
  name: 'ChinaAreaDataPlus',
  props: {
    selectedPlace: {
      type: String,
      default: '请选择地区'
    },
    width: {
      type: Number,
      default: 300
    }
  },
  data () {
    return {
      props: {
        lazy: true,
        lazyLoad (node, resolve) {
          const { level } = node
          console.log(node, level)
          const data = cloneDeep(provinceAndCityAndDistrictData)

          if (level === 0) { // 处理省
            const province = data.map(v => {
              return {
                value: v.value,
                label: v.label,
                leaf: false
              }
            })
            let nodes = [
              // {
              //   value: '',
              //   label: '全部',
              //   leaf: true
              // },
              ...province
            ]
            resolve(nodes)
          }

          if (level === 1) { // 处理市
            console.log('处理市')
            const provinceCode = node.value
            let city = []
            if (provinceCode) {
              city = data.find(v => v.value === provinceCode).children.map(v => {
                return {
                  value: v.value,
                  label: v.label,
                  leaf: false
                }
              })
            }
            let nodes = [
              // {
              //   value: '',
              //   label: '全部',
              //   leaf: true
              // },
              ...city
            ]
            resolve(nodes)
          }

          if (level === 2) { // 处理区
            console.log('处理区')
            const provinceCode = node.value.slice(0, 2) + '0000000000'
            const cityCode = node.value
            let district = []
            if (cityCode) {
              district = data.find(v => v.value === provinceCode).children.find(v => v.value === cityCode).children.map(v => {
                return {
                  value: v.value,
                  label: v.label,
                  leaf: false
                }
              })
            }
            let nodes = [
              // {
              //   value: '',
              //   label: '全部',
              //   leaf: true
              // },
              ...district
            ]
            resolve(nodes)
          }

          if (level === 3) { // 处理街道
            console.log('处理街道')
            const districtCode = node.value
            let district = []
            console.log(districtCode)
            if (districtCode) {
              axios({
                url: 'http://localhost:3000/street',
                method: 'get',
                params: {
                  code: districtCode
                }
              }).then(res => {
                // console.log(res.data.data)
                district = res.data.data.map(v => {
                  return {
                    ...v,
                    leaf: true
                  }
                })
                let nodes = [
                  // {
                  //   value: '',
                  //   label: '全部',
                  //   leaf: true
                  // },
                  ...district
                ]
                resolve(nodes)
              })
            } else {
              resolve()
            }
          }

          if (level === 4) {
            resolve()
          }
        }
      },
      chinaAreaDataCodes: []
    }
  },
  computed: {
    placeholder () {
      if (this.chinaAreaDataCodes.length > 0) {
        return this.chinaAreaDataCodes.map(v => CodeToText[v]).join('/')
      } else {
        return this.selectedPlace
      }
    },
    chinaAreaDataNames () {
      if (this.chinaAreaDataCodes.length > 0) {
        return this.chinaAreaDataCodes.map(v => CodeToText[v])
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
