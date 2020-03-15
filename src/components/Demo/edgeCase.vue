<template>
  <div>
    <edgeCaseChild ref="child"/>
    <div v-once>{{ name }}</div>
  </div>
</template>

<script>
import edgeCaseChild from '@/components/Demo/edgeCaseChild'

export default {
  name: 'EdgeCase',
  components: {
    edgeCaseChild
  },
  data() {
    return {
      foo: 1,
      name: 'vue'
    }
  },
  computed: {
    bar() {
      return this.foo + 1
    }
  },
  provide() {
    return {
      getMap: () => {
        console.log('getMap', this.foo)
      }
    }
  },
  mounted() {
    console.log(this.$refs.child.case)
    setTimeout(() => {
      this.name = 'shino'
      console.log(this)
    }, 1000)
  },
  methods: {
    baz() {
      console.log(this.foo)
    }
  }
}
</script>

<style scoped>

</style>
