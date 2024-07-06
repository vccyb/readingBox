import { mount } from '@vue/test-utils'
import Teleport from '../MyTeleport.vue'
import Signup from '../Signup.vue'

describe('teleport.vue', () => {
  beforeEach(() => {
    const el = document.createElement('div')
    el.id = 'modal'
    document.body.appendChild(el)
  })

  afterEach(() => {
    document.body.outerHTML = ''
  })

  it('teleport', async () => {
    const wrapper = mount(Teleport)
    console.log(wrapper.html())
    const signup = wrapper.getComponent(Signup)
    await signup.get('input').setValue('valid_username')
    await signup.get('form').trigger('submit.prevent')
    expect(signup.emitted().signup[0]).toEqual(['valid_username'])
  })
})
