<template>
    <div>
        <input type="checkbox" :checked="checked" @change="$emit('change', $event.target.checked)">
        <br>
        <div>{{title}}</div>
    </div>
</template>

<script>
export default {
  name: 'event_child',
  props: {
    checked: {
      type: Boolean
    },
    title: {
      type: String
    }
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  mounted () {
    setTimeout(() => {
      this.$emit('update:title', 'Hello Event!')
    }, 1000)
  }
}
</script>

<style scoped>

</style>
