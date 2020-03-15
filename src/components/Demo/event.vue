<template>
  <div>
    <eventChild v-model="checked" :title.sync="title"/>
    <br>
    <baseInput
      label="name"
      value="hello"
      @onFocus.native="onFocus"/>
  </div>
</template>

<script>
import eventChild from '@/components/Demo/eventChild'
import baseInput from '@/components/Demo/baseInput'

export default {
  name: 'Event',
  components: {
    eventChild,
    baseInput
  },
  data() {
    return {
      checked: true,
      title: 'shino'
    }
  },
  methods: {
    onFocus(e) {
      console.log(e)
      console.log(this)
    }
  }
}
</script>

<style scoped>

</style>
