<template>
    <div class="container">
        <div class="block">
<!--            <chinaAreaData-->
<!--                    common-service-url="http://10.20.102.1:7001/js/chinaAreaData.js"-->
<!--                    :chinaAreaDataCodes.sync="chinaAreaDataCodes"/>-->
            <search/>
        </div>
    </div>
</template>

<script>
// import chinaAreaData from './components/chinaAreaData'
// import chinaAreaData from 'ws-china-area-data/components/chinaAreaData'
import search from './components/search'

export default {
  name: 'myCascader',
  components: {
    // chinaAreaData,
    search
  },
  data () {
    return {
      chinaAreaDataCodes: []
    }
  }
}
</script>

<style scoped lang="scss">
    .container {
        width: 1000px;

        .block {
            float: left;
            position: relative;
        }
    }
</style>
