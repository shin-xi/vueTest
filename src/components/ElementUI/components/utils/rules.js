const checkCurtName = (rule, value, callback) => {
  console.log('check.curtName', value)
  if (value) {
    callback()
  } else {
    callback(new Error('请输入法院名称'))
  }
}

const checkAreaCode = (rule, value, callback) => {
  console.log('check.areaNames', value)
  const _value = value.filter(v => !!v)
  if (Array.isArray(value) && _value.length >= 2) {
    callback()
  } else {
    callback(new Error('请选择到对应市'))
  }
}

export const rules = {
  curtName: [
    { required: true, validator: checkCurtName, trigger: 'blur' }
  ],
  areaNames: [
    { required: true, validator: checkAreaCode, trigger: 'change' }
  ]
}
