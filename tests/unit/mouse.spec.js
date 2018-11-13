import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import YesNoComponent from '@/components/Test/YesNoComponent'

describe('点击事件', () => {
  it('在 yes 按钮上点击会调用我们的方法并附带参数 "yes"', () => {
    const wrapper = shallowMount(YesNoComponent)
    wrapper.find('button.yes').trigger('click')
    expect(wrapper.vm.msg).to.eql('yes')
  })

  it('在 no 按钮上点击会调用我们的方法并附带参数 "no"', () => {
    const wrapper = shallowMount(YesNoComponent)
    wrapper.find('button.no').trigger('click')
    expect(wrapper.vm.msg).to.eql('no')
  })
})
