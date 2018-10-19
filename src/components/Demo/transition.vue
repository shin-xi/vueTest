<template>
    <div>
        <button v-on:click="show = !show">
            Toggle
        </button>

        <!--duration 改变过渡总时长 设定的过渡属性时长不变-->
        <!--过渡生命周期-->
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>

        <transition name="fade" :duration="5000"
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled">
            <p v-if="show">hello</p>
        </transition>

        <button @click="show4 = !show4">
            Toggle
        </button>

        <transition
                @before-enter="beforeEnter1"
                @enter="enter1"
                @leave="leave1"
                :css="false">
            <p v-if="show4">
                Demo
            </p>
        </transition>

        <button v-on:click="show1 = !show1">
            Toggle
        </button>

        <transition name="demo">
            <p v-if="show1">demo</p>
        </transition>

        <button @click="show2 = !show2">Toggle show</button>
        <transition name="bounce">
            <p v-if="show2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at
                lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
        </transition>

        <button @click="show3 = !show3">
            Toggle render
        </button>

        <transition
                name="custom-classes-transition"
                enter-active-class="animated tada"
                leave-active-class="animated bounceOutRight">
            <p v-if="show3">hello</p>
        </transition>

        <div class="switch">
            <transition name="fade2" mode="out-in">
                <!-- ... the buttons ... -->
                <button @click="show5 = !show5" v-if="show5" class="myBtn">on</button>
            </transition>

            <transition name="fade2" mode="out-in">
                <!-- ... the buttons ... -->
                <button @click="show5 = !show5" v-if="!show5" class="myBtn">off</button>
            </transition>
        </div>
    </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: 'trans',
  data () {
    return {
      show: true,
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      show5: true
    }
  },
  methods: {
    // --------
    // 进入中
    // --------

    beforeEnter: function (el) {
      // ...
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function (el, done) {
      // ...
      done()
    },
    afterEnter: function (el) {
      // ...
    },
    enterCancelled: function (el) {
      // ...
    },

    // --------
    // 离开时
    // --------

    beforeLeave: function (el) {
      // ...
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    leave: function (el, done) {
      // ...
      done()
    },
    afterLeave: function (el) {
      // ...
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled: function (el) {
      // ...
    },
    beforeEnter1: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter1: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave1: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
  }
}
</script>

<style scoped lang="scss">
    @import '../../style/transition';
    @import '../../style/animation';

    button {
        display: block;
        margin-top: 30px;
    }

    .switch {
        position: relative;
        width: 50px;

        button {
            line-height: 30px;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
</style>
