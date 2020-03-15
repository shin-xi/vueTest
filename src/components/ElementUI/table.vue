<template>
  <div class="container">
    <el-button @click="resetDateFilter">清除日期过滤器</el-button>
    <el-button @click="clearFilter">清除所有过滤器</el-button>

    <el-table ref="filterTable" :data="tableData" style="width: 100%" highlight-current-row @row-click="rowClick">
      <!--<el-table-column type="index" width="50"></el-table-column>-->
      <el-table-column
        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="filterHandler"
        prop="date"
        label="日期"
        sortable
        width="180"
        column-key="date"/>
      <el-table-column prop="name" label="姓名" width="180"/>
      <el-table-column :formatter="formatter" prop="address" label="地址"/>
      <el-table-column
        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
        :filter-method="filterTag"
        prop="tag"
        label="标签"
        width="100"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" disable-transitions>
            {{ scope.row.tag }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  data() {
    return {
      tableData: [
        {
          'date': '2016-05-02',
          'name': '王大虎',
          'address': '上海市普陀区金沙江路 1518 弄',
          'tag': '家'
        },
        {
          'date': '2016-05-04',
          'name': '王二虎',
          'address': '上海市普陀区金沙江路 1517 弄',
          'tag': '公司'
        },
        {
          'date': '2016-05-01',
          'name': '王三虎',
          'address': '上海市普陀区金沙江路 1519 弄',
          'tag': '家'
        },
        {
          'date': '2016-05-03',
          'name': '王小虎',
          'address': '上海市普陀区金沙江路 1516 弄',
          'tag': '公司'
        }
      ]
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.filterTable.setCurrentRow(this.tableData[1])
    }, 2000)
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('date')
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter()
    },
    formatter(row, column) {
      return row.address
    },
    filterTag(value, row) {
      return row.tag === value
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    rowClick(row, event, column) {
      console.log(row)
      // console.log(event)
      // console.log(column)
    }
  }
}
</script>

<style scoped lang="scss">
    .container {
        width: 800px;
        height: 600px;

        /deep/ {
            .el-table__row {
                cursor: pointer;
            }
        }
    }
</style>
