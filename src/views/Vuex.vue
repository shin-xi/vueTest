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
  name: 'Vuex',
  data () {
    return {
      link: [
        { to: '/vuex/mapVuex', description: 'map辅助函数' },
        { to: '/vuex/formBinding', description: 'form双向绑定' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
