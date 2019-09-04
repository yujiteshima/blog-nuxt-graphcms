import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import bootstrapvue from 'bootstrap-vue'
import Top from '../../components/Top.vue'
import store from '../../store/index'

const localVue = createLocalVue()
localVue.use(Vuex, bootstrapvue)

describe('Top.vue', () => {
  let store
  let getters

  const wrapper = mount(Top)

  beforeEach(() => {
    getters = {
      getSelectWord: () => 'Nuxt.js'
    }
    store = new Vuex.Store({
      getters
    })
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('Teshi Blog')
  }) // .toContainで含まれるHtmlをテスト
})
