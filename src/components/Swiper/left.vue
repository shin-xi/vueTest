<template>
    <div class="left">
        <swiper :options="swiperOption">
            <template v-for="(item,index) of left">
                <swiper-slide :key="index">left {{item}}</swiper-slide>
            </template>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'left',
  props: {
    left: {
      type: Array,
      default () {
        return [0, 1, 2, 3, 4, 5]
      }
    }
  },
  data () {
    return {
      swiperOption: {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
        autoplay: {
          delay: 500,
          disableOnInteraction: false
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
    .left {
        /deep/ {
            .swiper-wrapper {
                width: 600px;
                height: 200px;
            }

            .swiper-slide {
                width: 200px;
                height: 200px;
            }
        }
    }
</style>
