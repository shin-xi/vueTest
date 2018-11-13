import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import keyBoard from '@/components/Test/keyBoard'

describe('键盘事件测试', () => {
  it('默认的数量是零', () => {
    const wrapper = shallowMount(keyBoard)
    expect(wrapper.vm.quantity).to.eql(0)
  })

  it('上按键将数量设置为 1', () => {
    const wrapper = shallowMount(keyBoard)
    wrapper.trigger('keydown.up')
    expect(wrapper.vm.quantity).to.eql(1)
  })

  it('下按键将数量减 1', () => {
    const wrapper = shallowMount(keyBoard)
    wrapper.vm.quantity = 5
    wrapper.trigger('keydown.down')
    expect(wrapper.vm.quantity).to.eql(4)
  })

  it('ESC 键将数量设置为 0', () => {
    const wrapper = shallowMount(keyBoard)
    wrapper.vm.quantity = 5
    wrapper.trigger('keydown.esc')
    expect(wrapper.vm.quantity).to.eql(0)
  })

  it('魔术字符 "a" 键将数量设置为 13', () => {
    const wrapper = shallowMount(keyBoard)
    wrapper.trigger('keydown', {
      which: 65
    })
    expect(wrapper.vm.quantity).to.eql(13)
  })
})
