<template>
  <div>
    <slotChild>
      <template slot="header">
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template slot="footer">
        <p>Here's some contact info</p>
      </template>
    </slotChild>

    <br>

    <slotChild/>

    <br>

    <slotChild>
      {{ name }}
    </slotChild>
  </div>
</template>

<script>
import slotChild from '@/components/Demo/slotChild'

export default {
  name: 'MySlot',
  components: {
    slotChild
  },
  data() {
    return {
      name: 'shino'
    }
  }
}
</script>

<style scoped>

</style>
