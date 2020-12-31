<template>
  <div>
    <div class="nav">
      <div
        v-for="(item,index) of ['wayPoint1','wayPoint2','wayPoint3']"
        :class="{active:+activeIndex===+index}"
        :key="index">
        {{ item }}
      </div>
    </div>

    <div
      v-waypoint="{
        active: true,
        callback: onWaypoint,
        options: intersectionOptions
      }"
      data-index="0"
      class="waypoint"
    >
      wayPoint1
    </div>

    <div
      v-waypoint="{
        active: true,
        callback: onWaypoint,
        options: intersectionOptions
      }"
      data-index="1"
      class="waypoint"
    >
      wayPoint2
    </div>

    <div
      v-waypoint="{
        active: true,
        callback: onWaypoint,
        options: intersectionOptions
      }"
      data-index="2"
      class="waypoint"
    >
      wayPoint3
    </div>

    <div class="foot">foot</div>
  </div>
</template>

<script>
export default {
  name: 'WayPoint',
  data() {
    return {
      activeIndex: 0,
      viewList: new Set(),
      intersectionOptions: {
        root: null,
        rootMargin: '-42px 0px 0px 0px',
        threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
      }
    }
  },
  methods: {
    onWaypoint({ el, going, direction }) {
      // going: in, out
      // direction: top, right, bottom, left
      // console.log(direction, el.innerText)
      // console.log(el.dataset.index)

      // console.log(el.innerText, going, direction)

      if (going === this.$waypointMap.GOING_IN) {
        // console.log(el.innerText, 'waypoint going in!')
        this.viewList.add(el.dataset.index)
        this.activeIndex = this.getActiveIndex()
      }

      if (going === this.$waypointMap.GOING_OUT) {
        // console.log(el.innerText, 'waypoint going out!')
        this.viewList.delete(el.dataset.index)
        this.activeIndex = this.getActiveIndex()
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        // console.log(el.innerText, 'waypoint going top!')
      }
    },
    getActiveIndex() {
      return [...this.viewList].sort((a, b) => a - b)[0]
    }
  }
}
</script>

<style scoped lang="scss">
.nav {
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  margin-bottom: 10px;

  > div {
    line-height: 30px;
    border: 1px solid #000;
    padding: 0 10px;
    transition: all .5s;
  }
}

.active {
  background-color: red;
}

.waypoint {
  background: cyan;
  height: 300px;
  margin-bottom: 10px;
}

.foot {
  background: grey;
  height: 200px;
}
</style>
