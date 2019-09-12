<template>
    <div class="container">
        <div class="block">
            <chinaAreaData/>
        </div>
    </div>
</template>

<script>
import chinaAreaData from './components/chinaAreaData'

export default {
  name: 'myCascader',
  components: {
    chinaAreaData
  }
}
</script>

<style scoped lang="scss">
    .container {
        width: 1000px;

        .block {
            float: left;
            position: relative;
        }
    }
</style>
