<template>
    <div class="swiper">
        <div class="left">
            <left :left="group[index]"/>
        </div>
        <div class="right">
            <right :index.sync="index" :right="right"/>
        </div>

        <div>
            <verticalText/>
        </div>
    </div>
</template>

<script>
import left from './left'
import right from './right'
import verticalText from './verticalText'

export default {
  name: 'container',
  components: {
    left,
    right,
    verticalText
  },
  data () {
    return {
      index: 0,
      group: [
        ['r0-l1', 'r0-l2', 'r0-l3', 'r0-l4', 'r0-l5'],
        ['r1-l1', 'r1-l2', 'r1-l3', 'r1-l4', 'r1-l5'],
        ['r2-l1', 'r2-l2', 'r2-l3', 'r2-l4', 'r2-l5'],
        ['r3-l1', 'r3-l2', 'r3-l3', 'r3-l4', 'r3-l5'],
        ['r4-l1', 'r4-l2', 'r4-l3', 'r4-l4', 'r4-l5']
      ],
      right: [0, 1, 2, 3, 4]
    }
  }
}
</script>

<style scoped lang="scss">
    .swiper {
        width: 1000px;
        display: flex;
        justify-content: space-between;

        .left {
            width: 600px;
            height: 200px;
            background-color: rgba(#000, .2);
        }

        .right {
            width: 200px;
            height: 600px;
            background-color: rgba(#000, .2);
        }
    }
</style>
