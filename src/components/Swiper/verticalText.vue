<template>
  <div class="verticalText">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide>{{ paragraph }}</swiper-slide>
      <swiper-slide>{{ paragraph }}</swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'VerticalText',
  props: {
    paragraph: {
      type: String,
      default: '道交口附近我i额外加哦飞机我发觉番道交口附近我i额外加哦飞机我发觉番道交口附近我i额外加哦飞机我发觉番道交口附近我i额外加哦飞机我发觉番'
    }
  },
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 10000,
        autoplay: {
          delay: 1,
          disableOnInteraction: false
        },
        freeMode: true
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    console.log('this is current swiper instance object', this.swiper)
  }
}
</script>

<style scoped lang="scss">
    .verticalText {
        width: 100px;
        height: 200px;
        overflow: hidden;
        background-color: rgba(grey, .2);

        /deep/ {
            .swiper-container-free-mode > .swiper-wrapper {
                transition-timing-function: linear !important;
                /*margin: 0 auto;*/
            }

            .swiper-slide {
            }
        }
    }
</style>
