import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ordinary from '@/components/Test/ordinary'

describe('常用技巧', () => {
  const $route = {
    path: '/',
    hash: '',
    params: { id: '123' },
    query: { q: 'hello' }
  }

  const wrapper = shallowMount(ordinary, {
    propsData: {
      foo: 'bar'
    },
    mocks: {
      // 在挂载组件之前
      // 添加仿造的 `$route` 对象到 Vue 实例中
      $route
    },
    // 将会把 globally-registered-component 解析为
    // 空的存根
    stubs: ['globally-registered-component']
  })

  wrapper.vm.$emit('foo')
  wrapper.vm.$emit('foo', 123)

  it('emit', () => { // 断言触发的事件
    // 断言事件已经被触发
    expect(!!wrapper.emitted().foo).to.eql(true)

    // 断言事件的数量
    expect(wrapper.emitted().foo.length).to.eql(2)

    // 断言事件的有效数据
    expect(wrapper.emitted().foo[1]).to.eql([123])
  })

  wrapper.setData({ count: 10 })
  // wrapper.setProps({ foo: 'bar' })

  it('setData', () => {
    expect(wrapper.vm.count).to.eql(10)
    expect(wrapper.vm.foo).to.eql('bar')
  })

  it('router', () => {
    expect(wrapper.vm.$route.params.id).to.eql('123')
  })
})
