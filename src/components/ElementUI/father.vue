<template>
    <div>
        <myInput v-model="input1"/>
    </div>
</template>

<script>
import myInput from './myInput'

export default {
  name: 'father',
  components: {
    myInput
  },
  data () {
    return {
      input1: 'input1'
    }
  }
}
</script>

<style scoped>

</style>
