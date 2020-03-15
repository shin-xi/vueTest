<template>
  <div>
    <div v-for="(item,index) of list" :key="index">
      <div style="text-align: left;">{{ item.title }}</div>
      <div v-if="item.children">
        <recursive :list="item.children"/>
      </div>
    </div>
  </div>
</template>

<script>
import recursive from '@/components/Demo/recursive'

export default {
  name: 'RecCom',
  components: {
    recursive
  },
  data() {
    return {
      list: [
        {
          title: '成人票',
          children: [{
            title: '成人三馆联票'
          },
          {
            title: '成人四馆联票',
            children: [{
              title: '成人四馆联票（一）'
            }]
          }]
        },
        {
          title: '学生票'
        },
        {
          title: '儿童票'
        },
        {
          title: '军人票'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
