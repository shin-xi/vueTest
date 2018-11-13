// 从测试实用工具集中导入 `mount()` 方法
// 同时导入你要测试的组件
import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Counter from '@/components/Test/counter'

describe('计数器', () => {
  // 现在挂载组件，你便得到了这个包裹器
  const wrapper = mount(Counter)

  it('渲染正确的标记', () => {
    expect(wrapper.html()).contains('class="count"')
  })

  // 也便于检查已存在的元素
  it('是一个按钮', () => {
    expect(wrapper.contains('button')).to.eql(true)
  })

  it('点击按钮应该使得计数递增', () => {
    expect(wrapper.vm.count).to.eql(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).to.eql(1)
  })

  // 接下来的两项测试都会如预期工作
  it('will catch the error using done', (done) => {
    Vue.config.errorHandler = done
    Vue.nextTick(() => {
      expect(true).to.eql(true)
      done()
    })
  })

  it('will catch the error using a promise', () => {
    return Vue.nextTick()
      .then(function () {
        expect(true).to.eql(true)
      })
  })
})
