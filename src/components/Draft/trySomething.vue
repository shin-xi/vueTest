<template>
    <div class="container_trySomething">
        <child :foo.sync="foo" :fooCopy="foo"/>
        <button @click="updateFoo">updateFoo</button>
    </div>
</template>

<script>
import child from './child'

export default {
  name: 'try',
  components: {
    child
  },
  data () {
    return {
      foo: {
        index: 1,
        name: 'foo'
      },
      timeout: null
    }
  },
  methods: {
    updateFoo () {
      this.foo.index++
      this.foo = { ...this.foo }
    }
  },
  watch: {
    foo: {
      handler (nv, ov) {
        // console.log(nv.index, ov.index)
        console.count('foo')
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>
