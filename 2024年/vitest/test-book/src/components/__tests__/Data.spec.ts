import { mount } from '@vue/test-utils'
import Data from '../Data.vue'
describe('Data.vue', () => {
  it.skip('mount', async () => {
    const wrapper = mount(Data, {})

    expect(wrapper.text()).toContain('first render')
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('second render') // 断言
    wrapper.vm.str = 'third render'
    await wrapper.vm.$nextTick()
    console.log('wrapper.text()', wrapper.html())
    expect(wrapper.vm.str).toBe('third render')
    expect(wrapper.text()).toContain('third render') // 断言
  })

  it('update props', async () => {
    const wrapper = mount(Data, {
      props: {
        msg: 'props msg'
      }
    })
    expect(wrapper.text()).toContain('props msg')
    await wrapper.setProps({
      msg: 'second render'
    })
    console.log('wrapper', wrapper.props('msg'))
    expect(wrapper.props('msg')).toBe('second render') // props 有没有值
    expect(wrapper.text()).toContain('second render') // props 是否正确渲染在页面上
  })
})
