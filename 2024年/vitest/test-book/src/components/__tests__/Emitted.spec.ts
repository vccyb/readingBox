import exp from 'constants'
import Emitted from '../Emitted.vue'
import { mount } from '@vue/test-utils'
describe('Emitted', () => {
  it('mount', async () => {
    const wrapper = mount(Emitted)
    const button = wrapper.find('[data-testid="button"]')

    await button.trigger('click')
    const emits = wrapper.emitted()

    console.log(emits)
    expect(emits).toHaveProperty('update:pageIndex')
    expect(emits).toHaveProperty('update:pageSize')
    expect(emits).toHaveProperty('change')
  })
})
