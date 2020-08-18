<template>
  <div class="JsxList">
    <h-title :id="id">Hello World</h-title>
    <button @click="next">下一个</button>
  </div>
</template>

<script>
import Title from './jsxItem'

export default {
  name: 'JsxList',
  components: {
    'h-title': Title
  },
  data() {
    return {
      id: 1
    }
  },
  methods: {
    next() {
      ++this.id
    }
  }
}
</script>

<style scoped lang="scss">

</style>
