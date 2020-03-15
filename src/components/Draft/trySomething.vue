<template>
  <div class="container_trySomething">
    <div v-for="(item,index) of list" :key="index">
      <div>{{ item.title }}-{{ item.content }}</div>
    </div>
    <button @click="setData">click</button>
  </div>
</template>

<script>

export default {
  name: 'Try',
  data() {
    return {
      list: [
        { title: 1, content: 'a' },
        { title: 2, content: 'b' },
        { title: 3, content: 'c' }
      ]
    }
  },
  methods: {
    setData() {
      for (let i = 0; i < this.list.length; i++) {
        setTimeout(() => {
          this.list[i].content += '<mp-miniprogram></mp-miniprogram>'
        }, 1000)
      }
    }
  }
}
</script>

<style scoped>

</style>
