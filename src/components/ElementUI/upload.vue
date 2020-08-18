<template>
  <div class="container_upload">
    <div>
      <!--      <h1>单张图片</h1>-->
      <!--      <ele-upload-image-->
      <!--        v-loading="singleLoading"-->
      <!--        :previewList="photoMockData.slice(0,1)"-->
      <!--        :isShowTip="false"-->
      <!--        :lazy="true"-->
      <!--        :size="150"-->
      <!--        :response-fn="handleResponse"-->
      <!--        :responseDeleteFn ="handleDelResponse"-->
      <!--        v-model="image1"-->
      <!--        :uploadFiles.sync="singleImg"-->
      <!--      />-->
      <!--      <br>-->
      <!--      <el-button-->
      <!--        type="primary"-->
      <!--        icon="el-icon-upload"-->
      <!--        @click="upload"/>-->
    </div>

    <!--    <div>-->
    <!--      <h1>多张图片</h1>-->
    <!--      <ele-upload-image-->
    <!--        :previewList="photoMockData"-->
    <!--        :response-fn="handleResponse"-->
    <!--        v-model="images"-->
    <!--        :uploadFiles.sync="multipleImg"-->
    <!--        multiple-->
    <!--      />-->
    <!--    </div>-->
    <el-upload
      :on-preview="handlePreview"
      :auto-upload="false"
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple>
      <i class="el-icon-upload"/>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
// import EleUploadImage from 'vue-ele-upload-image'
import EleUploadImage from './components/eleUploadImages'
import { photoMockData } from './utils/photoMockData'

export default {
  name: 'Upload',
  components: {
    EleUploadImage
  },
  data() {
    return {
      image1: '',
      // image2: '',
      // image3: '',
      images: [],
      photoMockData,
      singleLoading: false,
      singleImg: [],
      multipleImg: []
    }
  },
  methods: {
    handleResponse(response, file, fileList) {
      return file.url
    },
    upload() {
      this.singleLoading = true
      setTimeout(() => {
        this.singleLoading = false
      }, 1000)
    },
    handleDelResponse(data) {
      return new Promise(resolve => {
        console.log(data)
        resolve(true)
      })
    },
    handlePreview(file) {
      console.log(file)
    }
  }
}
</script>

<style scoped lang="scss">
    .container_upload {
        display: flex;

        > div {
            margin-right: 50px;
        }
    }
</style>
