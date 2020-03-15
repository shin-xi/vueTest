<template>
  <ul>
    <li v-for="(child,index) in children" :key="index">
      <treeFolder v-if="child.children" :folder="child"/>
      <span v-else>{{ child.name }}</span>
    </li>
  </ul>
</template>

<script>
import treeFolder from '@/components/Demo/treeFolder'

export default {
  name: 'TreeFolderContents',
  components: {
    treeFolder
  },
  props: {
    children: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
