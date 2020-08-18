<template>
  <div style="position: relative;">
    <template v-for="(item,index) of link">
      <span v-if="!!index" :key="index"> | </span>
      <router-link :key="`link${index}`" :to="item.to">{{ item.description }}</router-link>
    </template>

    <br>
    <div v-if="$store.state.loading">loading...</div>
    <br>

    <div style="margin-top: 50px;">
      <transition :name="transitionName">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Router',
  data() {
    return {
      link: [
        { to: '/router/dynRouter', description: '动态路由（无参数）' },
        { to: '/router/dynRouter/123', description: '动态路由（123）' },
        { to: '/router/dynRouter/321', description: '动态路由（321）' },
        { to: '/router/namedRouter', description: '命名视图' },
        { to: '/router/indexRouter', description: '过渡层级' },
        { to: '/router/routerScroll', description: '路由滚动' }
      ],
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route'(to, from) {
      const toIndex = to.meta.index
      const fromIndex = from.meta.index
      // console.log(toIndex, fromIndex)
      this.transitionName = toIndex < fromIndex ? 'slide-left' : 'slide-right'
    }
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    // console.log('我是组件路由守卫beforeRouteEnter', this)
    next(vm => {
      // console.log(vm)
      vm.$store.commit('switchLoading')
      setTimeout(() => {
        return !vm.$store.commit('switchLoading')
      }, 3000)
    })
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    // console.log('我是组件路由守卫beforeRouteUpdate', this)
    next()
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    // console.log('我是组件路由守卫beforeRouteLeave', this)
    next()
  }
}
</script>

<style scoped>
    .slide-left-enter-active, .slide-left-leave-active {
        transition: all .5s;
    }

    .slide-left-enter, .slide-left-leave-to {
        opacity: 0;
        transform: translateX(-100%);
    }

    .slide-right-enter-active, .slide-right-leave-active {
        transition: all .5s;
    }

    .slide-right-enter, .slide-right-leave-to {
        opacity: 0;
        transform: translateX(100%);
    }
</style>
