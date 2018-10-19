<template>
    <ul>
        <li v-for="(child,index) in children" :key="index">
            <treeFolder v-if="child.children" :folder="child"></treeFolder>
            <span v-else>{{ child.name }}</span>
        </li>
    </ul>
</template>

<script>
import treeFolder from '@/components/Demo/treeFolder'

export default {
  name: 'treeFolderContents',
  props: ['children'],
  components: {
    treeFolder
  }
}
</script>

<style scoped>

</style>
