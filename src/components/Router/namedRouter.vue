<template>
    <div style="position: absolute;top: 100px;left: 0;">
        <router-view class="view one"></router-view>
        <router-view class="view two" name="a"></router-view>
        <router-view class="view three" name="b"></router-view>
    </div>
</template>

<script>
export default {
  name: 'namedRouter'
}
</script>

<style scoped>

</style>
