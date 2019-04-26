<template>
    <div class="container_trySomething">
        <div>
            <child :foo.sync="foo" :fooCopy="foo"/>
            <button @click="updateFoo">updateFoo</button>
        </div>

        <hr>

        <div>
            <Debounce :time="1000" events="click">
                <button @click="onClick($event, 1)">click+1 {{val}}</button>
            </Debounce>
            <Debounce :time="1000" events="click">
                <button @click="onClick($event, 2)">click+2 {{val}}</button>
            </Debounce>
            <Debounce :time="1000" events="mouseup">
                <button @mouseup="onAdd">click+3 {{val}}</button>
            </Debounce>
            <Debounce :time="1000" events="click">
                <button @mouseup="onAdd">click+3 {{val}}</button>
            </Debounce>
        </div>
    </div>
</template>

<script>
import child from './child'
import Debounce from './Debounce'

export default {
  name: 'try',
  components: {
    child,
    Debounce
  },
  data () {
    return {
      foo: {
        index: 1,
        name: 'foo'
      },
      timeout: null,
      val: 0
    }
  },
  methods: {
    updateFoo () {
      const index = this.foo.index + 1
      this.foo = { // 触发一次更新
        index,
        name: 'foo'
      }
    },
    onClick ($ev, val) {
      this.val += val
    },
    onAdd () {
      this.val += 3
    }
  },
  watch: {
    foo: {
      handler (nv, ov) {
        console.log(nv.index, ov.index)
        console.count('foo')
      },
      deep: true
    }
  },
  mounted () {
    console.log(123)
  }
}
</script>

<style scoped>

</style>
