<template>
    <div>
        <edgeCaseChild ref="child"/>
        <br>
        <br>
        <br>
        <!--牛逼的递归组件-->
        <div v-for="(item,index) of list" :key="index">
            <div style="text-align: left;">{{item.title}}</div>
            <div v-if="item.children">
                <recursive :list="item.children"/>
            </div>
        </div>
    </div>
</template>

<script>
import edgeCaseChild from '@/components/Demo/edgeCaseChild'
import recursive from '@/components/Demo/recursive'

export default {
  name: 'edgeCase',
  components: {
    edgeCaseChild,
    recursive
  },
  data () {
    return {
      foo: 1,
      list: [{
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
      }]
    }
  },
  computed: {
    bar () {
      return this.foo + 1
    }
  },
  provide () {
    return {
      getMap: () => {
        console.log('getMap', this.foo)
      }
    }
  },
  methods: {
    baz () {
      console.log(this.foo)
    }
  },
  mounted () {
    console.log(this.$refs.child.case)
  }
}
</script>

<style scoped>

</style>
