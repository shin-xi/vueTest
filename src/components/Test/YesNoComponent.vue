<template>
    <div>
        <button class="yes" @click="callYes">Yes</button>
        <button class="no" @click="callNo">No</button>
    </div>
</template>

<script>
export default {
  name: 'YesNoComponent',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    callMe (msg) {
      this.msg = msg
    },
    callYes () {
      this.callMe('yes')
    },
    callNo () {
      this.callMe('no')
    }
  }
}
</script>

<style scoped>

</style>
