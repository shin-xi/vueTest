<template>
  <div>
    <header>
      <slot name="header"/>
    </header>
    <main>
      <slot>default</slot>
    </main>
    <footer>
      <slot name="footer"/>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SlotChild'
}
</script>

<style scoped>

</style>
