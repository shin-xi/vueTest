<template>
  <div class="tree">
    <div class="block">
      <el-tree
        :data="data"
        :expand-on-click-node="false"
        default-expand-all
        node-key="id">
        <span slot-scope="{ node, data }" class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <el-button
              v-if="data.next"
              type="text"
              size="mini"
              @click="() => append(data)">
              添加
            </el-button>
            <el-button
              type="text"
              size="mini"
              @click="() => edit(data)">
              编辑
            </el-button>
            <!--            <el-button-->
            <!--              type="text"-->
            <!--              size="mini"-->
            <!--              @click="() => remove(node, data)">-->
            <!--              删除-->
            <!--            </el-button>-->
          </span>
        </span>
      </el-tree>
    </div>
  </div>
</template>

<script>
let id = 1000

export default {
  name: 'Tree',
  data() {
    const data = [{
      id: 1,
      label: '债查查',
      next: true,
      children: [{
        id: 4,
        label: '投资人库',
        next: true,
        children: [{
          id: 9,
          label: '公司批量导入',
          next: false
        }, {
          id: 10,
          label: 'excel下载',
          next: false
        }]
      }]
    }]

    return {
      data: JSON.parse(JSON.stringify(data))
    }
  },
  methods: {
    append(data) {
      const newChild = { id: id++, label: 'test', next: true, children: [] }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
    },
    remove(node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },
    edit(data) {
      console.log(data)
    }
  }
}
</script>

<style scoped lang="scss">
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
