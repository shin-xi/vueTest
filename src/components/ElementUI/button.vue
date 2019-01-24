<template>
    <div>
        <el-button type="primary" :loading="isLoading"
        @click="fetchData">
            加载中
        </el-button>

        <hr>

        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" :min="1" :max="3">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳']

export default {
  name: 'draftButton',
  data () {
    return {
      isLoading: false,
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true
    }
  },
  methods: {
    fetchData () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 3000)
    },
    handleCheckAllChange (val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>

<style scoped>

</style>
