<template>
    <div>
        <propChild data-date-picker="activated"
                   class="date-picker-theme-dark"
                   :name="name" :status="status"/>
    </div>
</template>

<script>
import propChild from '@/components/Demo/propChild'

export default {
  name: 'prop',
  components: {
    propChild
  },
  data () {
    return {
      name: 'shino',
      status: 'success'
    }
  }
}
</script>

<style scoped>

</style>
