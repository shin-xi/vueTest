<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
const load = require('load-script') // script动态加载

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted() {
    load(`http://pv.sohu.com/cityjson?ie=utf-8`, (err, script) => {
      if (err) {
        throw Error(err)
      } else {
        console.log(script.src)
        // eslint-disable-next-line
        console.log(returnCitySN)
      }
    })
  }
}
</script>
