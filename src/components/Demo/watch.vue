<template>
  <div>
    <p>
      Ask a yes/no question:
      <input v-model="question" @input="show($event)">
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<script>
export default {
  name: 'Watch',
  data() {
    return {
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
      debounce: {
        interval: null,
        limit: 500
      }
    }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function(nv, ov) {
      this.answer = 'Waiting for you to stop typing...'
      clearTimeout(this.debounce.interval)
      this.debounce.interval = setTimeout(() => {
        this.answer = nv
      }, this.debounce.limit)
    }
  },
  methods: {
    show(e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>

</style>
