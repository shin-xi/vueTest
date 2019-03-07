<template>
    <div>
        <el-button type="text" @click="dialogVisible = true" ref="outer">点击打开 Dialog</el-button>

        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
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
  name: 'Dialog_',
  components: {
    myMap
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {
        })
    }
  },
  watch: {
    '$refs.inner': {
      handler (nv) {
        console.log(nv)
      },
      deep: true
    },
    dialogVisible (nv) {
      console.log(nv)
    }
  },
  mounted () {
    console.log(this)
    console.log(document.querySelector('#inner'))
  }
}
</script>

<style scoped>

</style>
