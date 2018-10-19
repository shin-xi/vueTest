<template>
    <div>
        <span>{{folder.name}}</span>
        <treeFolderContents :children="folder.children"/>
    </div>
</template>

<script>
export default {
  name: 'treeFolder',
  props: ['folder'],
  data () {
    return {}
  },
  beforeCreate () {
    // 官方文档给出的是require
    // this.$options.components.TreeFolderContents = require('./tree-folder-contents.vue')
    // 在基于vue-cli@2.8.1按照上面的写法还是会报错
    // Failed to mount component: template or render function not defined.
    // 所以我们应该改为基于es6的写法异步加载一个组件如下
    this.$options.components.TreeFolderContents = () => import('@/components/Demo/treeFolderContents')
  }
}
</script>

<style scoped>

</style>
