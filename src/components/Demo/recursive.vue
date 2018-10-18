<template>
    <div>
        <div v-for="(item,index) of list" :key="index">
            <div>{{item.title}}</div>
            <div v-if="item.children">
                <recursive :list="item.children"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'recursive',
  props: {
    list: {
      return: {}
    }
  }
}
</script>

<style scoped lang="scss">
    div{
        text-align: left;
        padding-left: 10px;
    }
</style>
