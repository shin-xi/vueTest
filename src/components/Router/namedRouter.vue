<template>
  <div style="position: absolute;top: 100px;left: 0;">
    <router-view class="view one"/>
    <router-view class="view two" name="a"/>
    <router-view class="view three" name="b"/>
  </div>
</template>

<script>
export default {
  name: 'NamedRouter'
}
</script>
x
<style scoped>

</style>
