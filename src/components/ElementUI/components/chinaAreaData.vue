<template>
  <el-cascader
    :placeholder="placeholder"
    :style="{width: `${typeof width ==='number'?width+'px':width}`}"
    :props="{ checkStrictly: checkStrictly,multiple:multiple }"
    v-model="chinaAreaDataCodes"
    :options="provinceAndCityAndDistrictData"
    :collapse-tags="collapseTags"
    :size="size"
    :clearable="clearable"
    :disabled="disabled"
    :show-all-levels="showAllLevels"
    class="cascader_chinaAreaData"
    change-on-select
    @change="change"/>
</template>

<script>
/* eslint-disable no-undef */
import { cloneDeep } from 'lodash'

const load = require('load-script') // script动态加载

export default {
  name: 'ChinaAreaData',
  model: {
    prop: 'codes',
    event: 'change'
  },
  props: {
    codes: {
      type: Array,
      default() {
        return []
      }
    },
    width: {
      type: [Number, String],
      default: '100%'
    },
    size: {
      type: String,
      default: 'large'
    },
    commonServiceUrl: {
      type: String,
      default: ''
    },
    locateCurrentCity: {
      type: Boolean,
      default: false
    },
    update: {
      type: String,
      default: 'monthly'
    },
    defaultPlaceCodes: {
      type: Array,
      default() {
        return []
      }
    },
    allOption: {
      type: Array,
      default() {
        return ['全部', '全部', '全部']
      }
    },
    level: {
      type: Number,
      default: 3
    },
    checkStrictly: {
      type: Boolean,
      default: false
    },
    collapseTags: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    whiteList: {
      type: Array,
      default() {
        return []
      }
    },
    myPlaceholder: {
      type: String,
      default: '请选择'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showAllLevels: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      provinceAndCityAndDistrictData: [],
      chinaAreaDataCodes: [],
      chinaAreaDataNames: [],
      CodeToText: {},
      provinceIndex: {
        '北京': 3, // 110000
        '天津': 14, // 120000
        '河北省': 17, // 130000
        '山西省': 15, // 140000
        '内蒙古自治区': 26, // 150000
        '辽宁省': 16, // 210000
        '吉林省': 21, // 220000
        '黑龙江省': 18, // 230000
        '上海': 4, // 310000
        '江苏省': 2, // 320000
        '浙江省': 1, // 330000
        '安徽省': 8, // 340000
        '福建省': 5, // 350000
        '江西省': 13, // 360000
        '山东省': 22, // 370000
        '河南省': 7, // 410000
        '湖北省': 12, // 420000
        '湖南省': 9, // 430000
        '广东省': 0, // 440000
        '广西壮族自治区': 19, // 450000
        '海南省': 20, // 460000
        '重庆': 6, // 500000
        '四川省': 10, // 510000
        '贵州省': 23, // 520000
        '云南省': 24, // 530000
        '西藏自治区': 25, // 540000
        '陕西省': 11, // 610000
        '甘肃省': 27, // 620000
        '青海省': 28, // 630000
        '宁夏回族自治区': 29, // 640000
        '新疆维吾尔自治区': 30 // 650000
      },
      municipalities: new Set(['上海市', '北京市', '天津市'])
    }
  },
  computed: {
    placeholder() {
      if (this.chinaAreaDataNames.length > 0) {
        const chinaAreaDataNames = this.chinaAreaDataNames.filter(v => !!v)
        if (chinaAreaDataNames.length === 1) {
          return chinaAreaDataNames[0]
        } else {
          return chinaAreaDataNames.join('/')
        }
      } else {
        return this.myPlaceholder
      }
    }
  },
  watch: {
    codes: {
      handler(nv) {
        if (!nv.length) {
          this.reset()
        }
        this.chinaAreaDataCodes = nv
      },
      immediate: true
    },
    provinceAndCityAndDistrictData: {
      handler(nv) {
        if (nv.length > 0) {
          this.citySearch()
        }
      },
      immediate: true
    },
    chinaAreaDataCodes: {
      handler(nv, ov) {
        if (nv.length > 0) {
          if (this.CodeToText) {
            const chinaAreaDataNames = []
            this.chinaAreaDataCodes.forEach(v => {
              chinaAreaDataNames.push(this.CodeToText[v] || '')
            })
            this.chinaAreaDataNames = chinaAreaDataNames
          }
        }
        if (JSON.stringify(nv) !== JSON.stringify(ov)) {
          this.$emit('change', nv)
        }
      },
      immediate: false
    }
  },
  mounted() {
    if (!window.provinceAndCityAndDistrictData) {
      let cache = ''
      if (this.update === 'monthly') {
        const now = new Date()
        const year = now.getFullYear()
        const month = ('' + (now.getMonth() + 1)).padStart(2, '0')
        cache = `?v=${year}${month}`
      }
      load(`${this.commonServiceUrl}${cache}`, (err, script) => {
        if (err) {
          window.provinceAndCityAndDistrictData = require('./data/dataSource')
          // throw Error(err)
        } else {
          // console.log(script.src)
        }
        provinceAndCityAndDistrictData.forEach(v => { // 排序
          this.provinceAndCityAndDistrictData[this.provinceIndex[v.label]] = v
        })
        this.provinceAndCityAndDistrictData = this.processData(this.provinceAndCityAndDistrictData)
        this.provinceAndCityAndDistrictData = [...this.provinceAndCityAndDistrictData]
        this.transCodeToText(this.CodeToText, this.provinceAndCityAndDistrictData)
        this.$nextTick(() => {
          this.$emit('update:CodeToText', this.CodeToText)
        })
      })
    } else {
      provinceAndCityAndDistrictData.forEach(v => { // 排序
        this.provinceAndCityAndDistrictData[this.provinceIndex[v.label]] = v
      })
      this.provinceAndCityAndDistrictData = this.processData(this.provinceAndCityAndDistrictData)
      this.provinceAndCityAndDistrictData = [...this.provinceAndCityAndDistrictData]
      this.transCodeToText(this.CodeToText, this.provinceAndCityAndDistrictData)
      this.$nextTick(() => {
        this.$emit('update:CodeToText', this.CodeToText)
      })
    }
  },
  methods: {
    loadMap() {
      return new Promise((resolve, reject) => {
        if (this.locateCurrentCity) {
          if (!window.AMap) {
            load(`https://webapi.amap.com/maps?v=1.4.10&key=a88b51904003ddd948ab7b2c454c8524`, (err, script) => {
              if (err) {
                reject(new Error('加载失败'))
              } else {
                // console.log(script.src)
                resolve()
              }
            })
          } else {
            // console.log('高德地图已加载')
            resolve()
          }
        } else {
          resolve()
        }
      })
    },
    async citySearch() {
      await this.loadMap()

      if (this.defaultPlaceCodes.length > 0) {
        this.chinaAreaDataCodes = this.defaultPlaceCodes.map(v => '' + v)
      } else {
        if (this.locateCurrentCity) {
          AMap.plugin('AMap.CitySearch', () => {
            const citySearch = new AMap.CitySearch()
            const chinaAreaDataCodes = []
            citySearch.getLocalCity((status, result) => {
              if (status === 'complete' && result.info === 'OK') {
                // 查询成功，result即为当前所在城市信息
                // eslint-disable-next-line
                let { province, city } = result
                province = province === '上海市' ? '上海' : province
                province = province === '北京市' ? '北京' : province
                province = province === '重庆市' ? '重庆' : province
                province = province === '天津市' ? '天津' : province
                // 模拟默认定位到的地址
                // const province = '江苏省'
                // const city = '南京市'
                if (provinceAndCityAndDistrictData) {
                  const provinceOpt = provinceAndCityAndDistrictData.find(v => v.label === province)
                  chinaAreaDataCodes.push(provinceOpt.value)
                  if (province === city) {
                    try {
                      chinaAreaDataCodes.push(provinceOpt.children[1].value)
                    } catch (e) {
                      chinaAreaDataCodes.push(provinceOpt.children[0].value)
                    }
                  } else {
                    const cityOpt = provinceOpt.children.find(v => v.label === city)
                    chinaAreaDataCodes.push(cityOpt.value)
                  }
                  this.chinaAreaDataCodes = chinaAreaDataCodes
                  this.change()
                }
              }
            })
          })
        }
      }
    },
    transCodeToText(obj, data) {
      data.forEach(v => {
        if (v.value) {
          obj[v.value] = v.label
        }
        if (v.children) {
          this.transCodeToText(obj, v.children)
        }
      })
    },
    processData(data) {
      const _data = cloneDeep(data)
      const _whiteList = new Set(this.whiteList)

      if (this.level === 1) {
        _data.forEach(v => {
          v.disabled = this.whiteList.length ? !_whiteList.has(v.value) : false
          delete v.children
        })

        if (this.allOption[0]) {
          _data.unshift({
            label: this.allOption[0],
            value: ''
          })
        }
      }

      if (this.level === 2) {
        _data.forEach(v => {
          v.disabled = this.whiteList.length ? !_whiteList.has(v.value) : false

          if (v.hasOwnProperty('children')) {
            v.children.forEach(vv => {
              delete vv.children
            })

            if (this.allOption[1]) {
              v.children.unshift({
                label: this.allOption[1],
                value: ''
              })
            }
          }
        })

        if (this.allOption[0]) {
          _data.unshift({
            label: this.allOption[0],
            value: ''
          })
        }
      }

      if (this.level === 3) {
        _data.forEach(v => {
          v.disabled = this.whiteList.length ? !_whiteList.has(v.value) : false

          if (v.hasOwnProperty('children')) {
            v.children.forEach(vv => {
              if (this.allOption[2]) {
                vv.children.unshift({
                  label: this.allOption[2],
                  value: ''
                })
              }
            })

            if (this.allOption[1]) {
              v.children.unshift({
                label: this.allOption[1],
                value: ''
              })
            }
          }
        })

        if (this.allOption[0]) {
          _data.unshift({
            label: this.allOption[0],
            value: ''
          })
        }
      }

      return _data
    },
    change() {
      if (this.chinaAreaDataCodes.length > 0) {
        if (this.CodeToText) {
          const chinaAreaDataNames = []
          this.chinaAreaDataCodes.forEach(v => {
            chinaAreaDataNames.push(this.CodeToText[v] || '')
          })
          this.chinaAreaDataNames = chinaAreaDataNames

          if (this.municipalities.has(chinaAreaDataNames[0]) && !chinaAreaDataNames[1]) {
            this.$emit('update:chinaAreaDataNames', [chinaAreaDataNames[0], chinaAreaDataNames[0]])
            this.$emit('update:chinaAreaDataCodes', [this.chinaAreaDataCodes[0], this.chinaAreaDataCodes[0].slice(0, 3) + '100000000'])
          } else {
            this.$emit('update:chinaAreaDataNames', chinaAreaDataNames)
            this.$emit('update:chinaAreaDataCodes', this.chinaAreaDataCodes)
          }
        }
      }
    },
    reset() {
      this.chinaAreaDataCodes = this.chinaAreaDataNames = []
      this.$emit('update:chinaAreaDataNames', [])
      this.$emit('update:chinaAreaDataCodes', [])
    }
  }
}
</script>

<style scoped lang="scss">

</style>
