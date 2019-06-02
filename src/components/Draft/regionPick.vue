<template>
    <div class="contain_regionPick">
        <div class="regions" v-for="(item,index) of regionData" :key="index" @click.self="pickup(item,index)"
             :style="{color:(showIndex!==-1  && index === showIndex)? 'red':'#000',pointEvent:'none'}">
            {{item.label}}
            <template v-if="item.children">
                <span v-if="showIndex!==-1  && index === showIndex">-</span>
                <span v-else>+</span>
            </template>

            <template v-if="index === showIndex">
                <regionPick class="inner" v-if="item.children" :currentLabel="currentValueCopy" :index="curIndex + 1"
                            :style="{marginLeft:`${-(index%4)*250}px`}"
                            v-model="currentValueCopy"
                            :regionData="item.children"/>
            </template>
        </div>
    </div>
</template>

<script>
import regionPick from './regionPick'

export default {
  name: 'regionPick',
  components: {
    regionPick
  },
  model: {
    prop: 'currentValue',
    event: 'pickupValue'
  },
  props: {
    regionData: {
      type: Array,
      default () {
        return []
      }
    },
    index: {
      type: Number,
      default: 0
    },
    currentValue: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentLabelCopy: [],
      currentValueCopy: [],
      curIndex: this.index,
      showIndex: -1
    }
  },
  watch: {
    currentValue: {
      handler (nv) {
        this.currentValueCopy = nv
      },
      deep: true,
      immediate: true
    },
    currentValueCopy: {
      handler (nv) {
        this.$emit('pickupValue', nv)
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    pickup (item, index) {
      console.log('点击了', item)

      if (!this.currentValueCopy[this.curIndex] || this.currentValueCopy[this.curIndex] !== item.value) {
        this.currentValueCopy[this.curIndex] = item.value
        this.currentValueCopy = this.currentValueCopy.slice(0, this.curIndex + 1)
        this.currentValueCopy = [...this.currentValueCopy]

        this.currentLabelCopy[this.curIndex] = item.label
        this.currentLabelCopy = this.currentLabelCopy.slice(0, this.curIndex + 1)
        this.currentLabelCopy = [...this.currentLabelCopy]

        this.showIndex = index
      } else {
        this.currentValueCopy = this.currentValueCopy.slice(0, this.curIndex)
        this.currentLabelCopy = this.currentLabelCopy.slice(0, this.curIndex)
        this.showIndex = -1
      }
      this.curIsPickup = !this.curIsPickup
      console.log('选择了', this.currentValueCopy, this.currentLabelCopy)
    }
  }
}
</script>

<style scoped lang="scss">
    .contain_regionPick {
        display: flex;
        flex-wrap: wrap;
        transition: all 0.5s;
        width: 1000px;
        z-index: 1;

        .regions {
            padding-left: 50px;
            margin-top: 5px;
            width: 200px;
            cursor: pointer;
            line-height: 1.5;
            transition: all 0.5s;
            position: relative;

            > .contain_regionPick.inner {
                background: greenyellow;
                display: flex;
                flex-wrap: wrap;
                transition: all 0.5s;
            }
        }
    }
</style>
