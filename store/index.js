import gql from 'graphql-tag'

export const state = () => ({
  posts: []
})
export const getters = {
  posts: state => state.posts
}
export const mutations = {
  setPosts(state, response) {
    // console.log(response)
    // console.log(response.data)
    // console.log('SetPosts!')
    // console.log('response @mutations:' + response)
    state.posts = response
    // console.log('set!')
    // console.log('response @mutations:' + response.data)
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query allPosts {
          posts(orderBy: date_DESC) {
            id
            title
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
    // console.log(response)
    // console.log(response.data.posts)

    commit('setPosts', response.data.posts)
  }
}
