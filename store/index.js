// import gql from 'graphql-tag'

export const state = () => ({
  posts: [],
  items: [],
  portf: [],
  selectWord: false
})
export const getters = {
  getPosts: state => state.posts,
  getItems: state => state.items,
  getSelectWord: state => state.selectWord
  // getPortfolioItems: state => {
  //   state.filter()
  // }
}
export const mutations = {
  setPosts(state, response) {
    state.posts = response.filter(v => v.slug.match(/^(?!.*works).*$/))
    state.items = response.filter(v => v.slug.match(/^(?!.*works).*$/))
    state.portf = response.filter(v => v.tag1 === 'Works')
  },
  setItems(state, response) {
    state.items = response.filter(v => v.slug.match(/^(?!.*works).*$/))
  },
  // setPortF(state, response) {
  //   state.portf = response.filter(v => v.tag1 === 'Works')
  // },
  allItems(state) {
    state.items = state.posts
    state.selectWord = false
  },
  setWord(state, response) {
    state.selectWord = response
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const getUrl =
      'https://firebasestorage.googleapis.com/v0/b/cloudstragetest-2f062.appspot.com/o/blog_post.json?alt=media&token=b8649a21-e84b-4798-a95d-8d2188e61b6b'
    const response = await this.$axios.$get(getUrl)
    // const response = await this.app.apolloProvider.defaultClient.query({
    //   query: gql`
    //     query allPosts {
    //       posts(where: { status: PUBLISHED }, orderBy: date_DESC) {
    //         id
    //         title
    //         slug
    //         content
    //         description
    //         createdAt
    //         date
    //         thumbnail {
    //           url
    //         }
    //         tag1
    //         tag2
    //         tag3
    //         tag4
    //       }
    //     }
    //   `
    // })
    commit('setPosts', response.data.posts)
  },
  selectPosts({ commit }, items) {
    commit('setItems', items)
  },
  allItems({ commit }) {
    commit('allItems')
  }
}
