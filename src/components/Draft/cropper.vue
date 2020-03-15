<template>
  <div style="width: 600px;height: 600px;">
    <vueCropper
      v-if="show"
      ref="cropper"
      :img="option.img"
      :outputSize="option.size"
      :outputType="option.outputType"
      :info="true"
      :full="option.full"
      :canMove="option.canMove"
      :canMoveBox="option.canMoveBox"
      :fixed="option.fixed"
      :fixedNumber="option.fixedNumber"
      :fixedBox="option.fixedBox"
      :original="option.original"
      :autoCrop="option.autoCrop"
      :autoCropWidth="option.autoCropWidth"
      :autoCropHeight="option.autoCropHeight"
      :centerBox="option.centerBox"
      :high="option.high"
      :infoTrue="option.infoTrue"
      :canScale="option.canScale"
    />
    <img src="http://mmbiz.qpic.cn/mmbiz_jpg/pKvmWQOibzaQ21T2cUia2ic1ZwnMlA3Y7WB565vjCXW3bOntLbsicJtgc50PHblKqJDyzEFTzEE8adaScez4Eb4jXQ/0" alt="">
  </div>
</template>

<script>
import { VueCropper } from 'vue-cropper'

export default {
  name: 'Cropper',
  components: {
    VueCropper
  },
  data() {
    return {
      show: false,
      option: {
        // img: 'http://cdn.xyxiao.cn/Landscape_3.jpg',
        img: 'http://mmbiz.qpic.cn/mmbiz_jpg/pKvmWQOibzaQ21T2cUia2ic1ZwnMlA3Y7WB565vjCXW3bOntLbsicJtgc50PHblKqJDyzEFTzEE8adaScez4Eb4jXQ/0',
        size: 1,
        outputType: '1',
        canScale: false,
        info: true,
        autoCrop: true,
        canMove: false,
        centerBox: true,
        fixed: true,
        fixedNumber: [1, 1]
      }
    }
  }
}
</script>

<style scoped>

</style>
