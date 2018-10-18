<template>
    <div>{{fullName}}</div>
</template>

<script>
export default {
  name: 'computed',
  data () {
    return {
      firstName: 'Foo',
      lastName: 'Bar'
    }
  },
  computed: {
    fullName: {
      // getter
      get () {
        return `${this.firstName} ${this.lastName}`
      },
      // setter
      set (nv) {
        const names = nv.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.fullName = 'shino xi'
    }, 2000)
  }
}
</script>

<style scoped>

</style>
