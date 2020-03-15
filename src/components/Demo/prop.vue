<template>
  <div>
    <propChild
      :name="name"
      :status="status"
      data-date-picker="activated"
      class="date-picker-theme-dark"/>
  </div>
</template>

<script>
import propChild from '@/components/Demo/propChild'

export default {
  name: 'Prop',
  components: {
    propChild
  },
  data() {
    return {
      name: 'shino',
      status: 'success'
    }
  }
}
</script>

<style scoped>

</style>
