const fs = require('fs')
const data = require('./dataSource')

function transCodeToText(data) {
  const CodeToText = {}
  const _data = JSON.parse(JSON.stringify(data))

  codeRecursion(_data)

  return CodeToText

  function codeRecursion(list) {
    const _list = JSON.parse(JSON.stringify(list))
    _list.forEach(v => {
      CodeToText[v.value] = v.label

      if (v.hasOwnProperty('children') && v.children.length > 0) { // 递归条件
        codeRecursion(v.children)
      }
    })
  }
}

fs.writeFile('./CodeToText.js', 'export default ' + JSON.stringify(transCodeToText(data), null, 2), (err) => {
  if (err) throw err
  console.log('文件已保存！')
})
