<template>
    <div class="container">
        <div class="block">
            <search/>
        </div>
    </div>
</template>

<script>
import search from './components/search'

export default {
  name: 'myCascader',
  components: {
    search
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
