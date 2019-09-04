import { mount } from '@vue/test-utils'
import bootstrapvue from 'bootstrap-vue'
import Footer from '../../components/Footer.vue'

const localVue = createLocalVue()
localVue.use(Vuex, bootstrapvue)

describe('Footer', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Footer, {
      localVue
    })
    console.log(wrapper.html())
  })
})
