<template>
  <div>
    <el-button
      :loading="downloadLoading"
      style="margin:0 0 20px 20px;"
      type="primary"
      icon="document"
      @click="handleDownload">
      下载Excel
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'DownExcel',
  props: {
    excelData: {
      type: Array,
      default() {
        return [[1, 2, 3], [4, 5, 6]]
      }
    },
    filename: {
      type: String,
      default: 'excel-list'
    }
  },
  data() {
    return {
      downloadLoading: false
    }
  },
  methods: {
    handleDownload() {
      this.downloadLoading = true
            import('@/vendor/Export2Excel').then(excel => {
              excel.export_json_to_excel({
                header: this.excelData[0],
                data: this.excelData.slice(1),
                filename: this.filename,
                autoWidth: this.autoWidth,
                bookType: this.bookType
              })
              this.downloadLoading = false
            })
    }
  }
}
</script>

<style scoped>

</style>
