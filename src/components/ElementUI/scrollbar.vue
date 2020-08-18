<template>
  <div class="container_scrollbar">
    <h3>scrollbar</h3>
    <div style="height:300px;width: 300px;">
      <el-scrollbar style="height:100%">
        <div style="width:700px;height:700px;background: #ddd;">
          ....... blabla.....
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scrollbar'
}
</script>

<style scoped lang="scss">
    /deep/ {
        .is-horizontal {
            top: 0 !important;
        }
    }
</style>
