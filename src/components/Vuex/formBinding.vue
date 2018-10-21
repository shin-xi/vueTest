<template>
    <div>
        <div>用于表单编辑</div>
        <br>
        <input v-model="message">
        <br>
    </div>
</template>

<script>
export default {
  name: 'formBinding',
  computed: {
    message: {
      get () {
        return this.$store.state.obj.message
      },
      set (val) {
        this.$store.commit('updateMessage', val)
      }
    }
  }
}
</script>

<style scoped>

</style>
