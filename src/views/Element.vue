<template>
    <div style="position: relative;">
        <template v-for="(item,index) of link">
            <span v-if="!!index" :key="index"> | </span>
            <router-link :key="`link${index}`" :to="item.to">{{item.description}}</router-link>
        </template>

        <div style="margin-top: 50px;">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Element',
  data () {
    return {
      link: [
        { to: '/element/father', description: '容器' },
        { to: '/element/container', description: '布局容器' },
        { to: '/element/button', description: '按钮' },
        { to: '/element/input', description: '输入框' },
        { to: '/element/cascader', description: '级联选择器' },
        { to: '/element/table', description: '表格' },
        { to: '/element/loading', description: '加载' },
        { to: '/element/dialog', description: '对话框' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
