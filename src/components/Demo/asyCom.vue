<template>
    <div>
        <asyChild/>
    </div>
</template>

<script>

export default {
  name: 'asyCom',
  components: {
    asyChild: () => import('@/components/Demo/asyChild')
  }
}
</script>

<style scoped>

</style>
