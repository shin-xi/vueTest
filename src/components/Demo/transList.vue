<template>
    <div>
        <div>
            <button @click="shuffle">Shuffle</button>
            <button @click="add">Add</button>
            <button @click="remove">Remove</button>
            <button @click="push">Push</button>
            <button @click="shift">Shift</button>
            <button @click="refresh">refresh</button>
        </div>

        <div class="demo">
            <transition-group name="list" tag="p">
                <span v-for="item in items" :key="item" class="list-item">
                  {{ item }}
                </span>
            </transition-group>
        </div>

        <div class="demo">
            <transition-group name="flip-list" tag="ul">
                <li v-for="item in items" :key="item">
                    {{ item }}
                </li>
            </transition-group>
        </div>

        <div class="demo">
            <transition-group name="list-complete" tag="p">
                <span v-for="item in items" :key="item" class="list-complete-item">
                  {{ item }}
                </span>
            </transition-group>
        </div>

        <div class="demo">
            <transition-group name="list-diy" tag="p">
                <span v-for="item in items" :key="item" class="list-complete-item">
                  {{ item }}
                </span>
            </transition-group>
        </div>

        <div>
            <input v-model.number="number" type="number" step="20">
            <p>{{ animatedNumber }}</p>
        </div>
    </div>
</template>

<script>
/* eslint-disable no-undef */

export default {
  name: 'transList',
  data () {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      number: 0,
      tweenedNumber: 0
    }
  },
  computed: {
    animatedNumber () {
      return this.tweenedNumber.toFixed(0)
    }
  },
  watch: {
    number (newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue })
    }
  },
  methods: {
    randomIndex () {
      return Math.floor(Math.random() * this.items.length)
    },
    add () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove () {
      this.items.splice(this.randomIndex(), 1)
    },
    shift () {
      this.items.shift()
    },
    push () {
      this.items.push(this.nextNum)
      this.nextNum++
    },
    shuffle () {
      this.items = _.shuffle(this.items)
    },
    refresh () {
      // this.items = []
      // this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      this.shift()
      this.push()
    }
  }
}
</script>

<style scoped lang="scss">
    .list-item {
        display: inline-block;
        margin-right: 10px;
    }

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }

    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

    .flip-list-move {
        transition: transform 1s;
    }

    .list-complete-item {
        transition: all 1s;
        display: inline-block;
        margin-right: 10px;
    }

    .list-complete-enter, .list-complete-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

    .list-complete-leave-active {
        position: absolute;
    }

    .list-diy-enter {
        opacity: 0;
        transform: translateX(100%);
    }

    .list-diy-leave-to {
        opacity: 0;
        transform: translateX(-100%);
    }

    .list-diy-leave-active {
        position: absolute;
    }
</style>
