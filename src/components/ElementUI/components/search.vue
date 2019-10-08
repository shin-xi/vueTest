<template>
    <div>
        <chinaAreaData
                common-service-url="http://10.20.102.1:7001/js/chinaAreaData.js"
                :chinaAreaDataCodes.sync="chinaAreaDataCodes"/>
    </div>
</template>

<script>
import chinaAreaData from '../components/chinaAreaData'

export default {
  name: 'search',
  components: {
    chinaAreaData
  },
  data () {
    return {
      chinaAreaDataCodes: []
    }
  }
}
</script>

<style scoped>

</style>
