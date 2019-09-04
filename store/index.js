import gql from 'graphql-tag'

export const state = () => ({
  posts: [],
  items: [],
  selectWord: false
})
export const getters = {
  getPosts: state => state.posts,
  getItems: state => state.items,
  getSelectWord: state => state.selectWord
}
export const mutations = {
  setPosts(state, response) {
    state.posts = response
    state.items = response
  },
  setItems(state, response) {
    state.items = response
  },
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
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query allPosts {
          posts(where: { status: PUBLISHED }, orderBy: date_DESC) {
            id
            title
            slug
            content
            description
            createdAt
            date
            thumbnail {
              url
            }
            tag1
            tag2
            tag3
            tag4
          }
        }
      `
    })
    commit('setPosts', response.data.posts)
  },
  selectPosts({ commit }, items) {
    commit('setItems', items)
  },
  allItems({ commit }) {
    commit('allItems')
  }
}
