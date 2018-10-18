<template>
    <div>
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
  name: 'Demo',
  data () {
    return {
      link: [
        { to: '/demo/lifeCycle', description: '生命周期' },
        { to: '/demo/computed', description: '计算属性' },
        { to: '/demo/watch', description: '侦听属性' },
        { to: '/demo/modifier', description: '修饰符' },
        { to: '/demo/prop', description: 'prop验证' },
        { to: '/demo/event', description: '自定义事件' },
        { to: '/demo/slot', description: '插槽' },
        { to: '/demo/dynCom', description: '动态组件' },
        { to: '/demo/asyCom', description: '异步组件' },
        { to: '/demo/edgeCase', description: '边界情况' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
