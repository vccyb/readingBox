import { shallowMount } from '@vue/test-utils'
import Ref from '../Ref.vue'

describe('Ref', () => {
  it('自动聚焦的输入框', () => {
    const wrapper = shallowMount(Ref, {
      attachTo: document.body
    })
    console.log(wrapper)
    const input = wrapper.find<HTMLInputElement>({
      ref: 'input'
    })
    console.log(input)
    expect(document.activeElement).toBe(input.element)
  })
})
