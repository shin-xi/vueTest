const load = require('load-script') // script动态加载
export const baseURL = process.env.NODE_ENV === 'development' ? 'http://10.20.100.252:5050' : 'http://10.20.100.252:5050'
/* eslint-disable no-undef */

const wxChinaAreaData = {}

if (!window.provinceAndCityAndDistrictData) {
  const now = new Date()
  const year = now.getFullYear()
  const month = ('' + (now.getMonth() + 1)).padStart(2, '0')
  const cache = `?v=${year}${month}`
  load(`${baseURL}/static/chinaAreaDataCountyAll_2019.js${cache}`, (err, script) => {
    if (err) {
      throw Error(err)
    } else {
      // console.log(script.src)
      wxChinaAreaData.CodeToText = transCodeToText(window.provinceAndCityAndDistrictData)
    }
  })
} else {
  wxChinaAreaData.CodeToText = transCodeToText(window.provinceAndCityAndDistrictData)
}

function transCodeToText(data) {
  const obj = {}
  _transCodeToText(obj, data)
  function _transCodeToText(obj, data) {
    // console.log(typeof data)
    data.forEach(v => {
      obj[v.value] = v.label
      if (v.children) {
        _transCodeToText(obj, v.children)
      }
    })
  }
  return obj
}

export { wxChinaAreaData }
