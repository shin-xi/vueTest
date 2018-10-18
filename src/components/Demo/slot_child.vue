<template>
    <div>
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot>default</slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'slot_child'
}
</script>

<style scoped>

</style>
