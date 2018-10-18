<template>
    <div>
        <button @click="curCom ='dynA'">dynA</button>
        <button @click="curCom ='dynB'">dynB</button>
        <br>
        <br>
        <keep-alive>
            <component :is="curCom"></component>
        </keep-alive>
    </div>
</template>

<script>
import dynA from '@/components/Demo/dynA'
import dynB from '@/components/Demo/dynB'

export default {
  name: 'dynCom',
  components: {
    dynA,
    dynB
  },
  data () {
    return {
      curCom: 'dynA'
    }
  }
}
</script>

<style scoped>

</style>
