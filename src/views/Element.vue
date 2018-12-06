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
        { to: '/element/father', description: '容器' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
