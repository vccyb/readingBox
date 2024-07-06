import { mount } from '@vue/test-utils'
import Attachs from '../Attachs.vue'
describe('Attach.vue', () => {
  it('attach render error', async () => {
    const wrapper = mount(Attachs, {
      attachTo: document.body
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('123')
  })
})
