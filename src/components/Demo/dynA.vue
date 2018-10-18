<template>
    <div :style="{color:color}">dynA</div>
</template>

<script>
export default {
  name: 'dynA',
  data () {
    return {
      color: 'black'
    }
  },
  mounted () {
    setTimeout(() => {
      this.color = 'red'
    }, 3000)
  }
}
</script>

<style scoped>

</style>
