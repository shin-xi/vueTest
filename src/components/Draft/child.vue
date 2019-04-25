<template>
    <div></div>
</template>

<script>
export default {
  name: 'child',
  props: {
    fooCopy: {
      type: Object,
      default () {
        return {
          index: 1,
          name: 'foo'
        }
      }
    }
  },
  data () {
    return {
      foo: {}
    }
  },
  watch: {
    fooCopy: {
      handler (nv, ov) {
        console.log((nv && nv.index) || null, (ov && ov.index) || null)
        this.foo = nv
      },
      deep: true,
      immediate: true
    },
    foo: {
      handler (nv) {
        this.$emit('update:foo', nv)
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>
