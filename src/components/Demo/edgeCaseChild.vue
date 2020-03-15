<template>
  <div>
    edgeCaseChild
  </div>
</template>

<script>

export default {
  name: 'EdgeCaseChild',
  inject: ['getMap'],
  data() {
    return {
      case: 2,
      repeat: 0
    }
  },
  mounted() {
    console.log('root foo', this.$root)

    console.log(this.$parent)
    // this.$parent.baz()
    this.getMap()
  }
}
</script>

<style scoped>

</style>
