<template>
  <div>
    <a href="https://www.baidu.com" @click.prevent="dodo">百度</a>

    <br>

    <a href="https://www.baidu.com" @click.passive="dodo">百度</a>

    <!-- 阻止单击事件继续传播 -->
    <div class="gpa" @click="dodo">
      <div class="pa" @click="doThat">
        <a href="https://www.baidu.com" @click.stop.prevent="doThis">百度</a>
      </div>
    </div>

    <!-- 添加事件监听器时使用事件捕获模式 -->
    <!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
    <div class="gpa" @click.capture="dodo">
      <div class="pa" @click="doThat">doThat</div>
    </div>

    <div class="gpa" @click="dodo">
      <div class="pa" @click="doThat">doThat</div>
    </div>

    <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
    <!-- 即事件不是从内部元素触发的 -->
    <div class="gpa" @click.self="dodo">
      <div class="pa" @click="doThat">doThat</div>
    </div>

    <div class="gpa" @click.once="dodo">
      <div class="pa" @click.once="doThat">once</div>
    </div>

    <!-- 同上 -->
    <input @keyup.enter.delete="submit">
  </div>
</template>

<script>
export default {
  name: 'Modifier',
  methods: {
    m1() {
      alert('haha')
    },
    doThis() {
      alert('doThis')
    },
    doThat() {
      alert('doThat')
    },
    dodo() {
      alert('dodo')
    },
    submit() {
      console.log('submit')
    }
  }
}
</script>

<style scoped lang="scss">
    .father {
        width: 100px;
        height: 100px;
        background-color: darkolivegreen;
        color: #ffffff;

        .child {
            width: 100%;
            height: 50px;
        }
    }

    .gpa {
        margin: 20px auto;
        width: 100px;
        height: 60px;
        background: green;
    }

    .pa {
        width: 60px;
        height: 40px;
        background: pink;
        margin: 0 auto;
        text-align: center
    }
</style>
