<template>
    <div>
        <edgeCaseChild ref="child"/>
        <div v-once>{{name}}</div>
    </div>
</template>

<script>
import edgeCaseChild from '@/components/Demo/edgeCaseChild'

export default {
  name: 'edgeCase',
  components: {
    edgeCaseChild
  },
  data () {
    return {
      foo: 1,
      name: 'vue'
    }
  },
  computed: {
    bar () {
      return this.foo + 1
    }
  },
  provide () {
    return {
      getMap: () => {
        console.log('getMap', this.foo)
      }
    }
  },
  methods: {
    baz () {
      console.log(this.foo)
    }
  },
  mounted () {
    console.log(this.$refs.child.case)
    setTimeout(() => {
      this.name = 'shino'
      console.log(this)
    }, 1000)
  }
}
</script>

<style scoped>

</style>
