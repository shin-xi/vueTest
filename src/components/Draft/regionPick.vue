<template>
    <div class="contain_regionPick">
        <div class="regions" v-for="(item,index) of regionData" :key="index">
            <div class="regionItem" :class="{active:showIndex!==-1 && index === showIndex}">
                <span @click="pickup(item,index)">{{ item.label }}</span>
                <template v-if="item.children">
                    <span v-if="showIndex!==-1 && index === showIndex">-</span>
                    <span v-else>+</span>
                </template>
            </div>

            <template v-if="index === showIndex">
                <regionPick class="inner" v-if="item.children" :currentValue="currentValueCopy" :currentLabel="currentLabelCopy" :index="curIndex + 1"
                            :style="{marginLeft:`${-(index%6)*100}px`,zIndex:curIndex+1}"
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
    },
    currentLabel: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentValueCopy: [],
      currentLabelCopy: [],
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
    },
    currentLabel: {
      handler (nv) {
        this.currentLabelCopy = nv
      },
      deep: true,
      immediate: true
    },
    currentLabelCopy: {
      handler (nv) {
        this.$emit('pickupLabel', nv)
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
        width: 1100px;
        z-index: 1;
        font-size: 12px;
        padding: 2px 4px;
        position: relative;

        .regions {
            margin: 0 5px;
            width: 120px;
            cursor: pointer;
            line-height: 1.5;
            transition: all 0.5s;
            position: relative;
            box-sizing: border-box;

            .regionItem {
                padding: 2px 4px;
            }

            > .contain_regionPick.inner {
                display: flex;
                flex-wrap: wrap;
                transition: all 0.5s;
                margin: 5px 0;
            }
        }

        .active {
            background-color: #CD0F32;
            color: #fff;
        }
    }
</style>
