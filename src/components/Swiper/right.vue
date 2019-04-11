<template>
    <div class="right">
        <swiper :options="swiperOption" ref="mySwiper">
            <template v-for="(item,index) of right">
                <swiper-slide :key="index">right {{item}}</swiper-slide>
            </template>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'right',
  props: {
    right: {
      type: Array,
      default () {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      }
    }
  },
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        // reverseDirection: true,
        // autoplay: {
        //   delay: 1000,
        //   disableOnInteraction: false
        // }
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
    this.swiper.on('slideChange', () => {
      // console.log(this.swiper.activeIndex)
      console.log(this.swiper.activeIndex - this.swiper.loopedSlides)
      const index = this.swiper.activeIndex - this.swiper.loopedSlides
      let indexReal = index
      if (index < 0) {
        // console.log(index + this.right.length)
        indexReal = index + this.right.length
      } else if (index >= this.right.length) {
        // console.log(index - this.right.length)
        indexReal = index - this.right.length
      } else {
        // console.log(index)
        indexReal = index
      }
      this.$emit('update:index', indexReal)
    })
  }
}
</script>

<style scoped lang="scss">
    .right {
        /deep/ {
            .swiper-wrapper {
                width: 200px;
                height: 600px;
            }

            .swiper-slide {
                width: 200px;
                height: 200px;
            }
        }
    }
</style>
