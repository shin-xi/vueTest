<template>
  <div>
    <input :checked="checked" type="checkbox" @change="$emit('change', $event.target.checked)">
    <br>
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'EventChild',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.$emit('update:title', 'Hello Event!')
    }, 1000)
  }
}
</script>

<style scoped>

</style>
