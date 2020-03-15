<template>
  <div>
    <asyChild/>
  </div>
</template>

<script>

export default {
  name: 'AsyCom',
  components: {
    asyChild: () => import('@/components/Demo/asyChild')
  }
}
</script>

<style scoped>

</style>
