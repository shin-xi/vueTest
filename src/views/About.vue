<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!--    <MyFirstComponent :items="cityList"></MyFirstComponent>-->
  </div>
</template>

<script>
// import MyFirstComponent from 'my-first-component'

export default {
  name: 'About',
  components: {
    // MyFirstComponent
  },
  data() {
    return {
      cityList: ['北京', '上海', '广州', '深圳']
    }
  }
}
</script>
