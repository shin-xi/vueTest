<template>
  <div>
    <el-button ref="outer" type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

    <div v-for="(item,index) of form" :key="index">{{ item }}</div>

    <el-dialog :visible.sync="dialogVisible" :before-close="handleClose" title="提示" width="30%">
      <span ref="inner">这是一段信息</span>
      <myMap/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import myMap from './myMap'

export default {
  name: 'Dialog',
  components: {
    myMap
  },
  data() {
    return {
      dialogVisible: false,
      form: [1, 2, 3]
    }
  },
  watch: {
    '$refs.inner': {
      handler(nv) {
        console.log(nv)
      },
      deep: true
    },
    dialogVisible(nv) {
      console.log(nv)
    }
  },
  mounted() {
    console.log(this)
    console.log(document.querySelector('#inner'))

    setTimeout(() => {
      console.log(1)
      this.form[2] = 8
      this.form = [...this.form]
    }, 1000)
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {
        })
    }
  }
}
</script>

<style scoped>

</style>
