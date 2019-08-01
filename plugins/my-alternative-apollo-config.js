// plugins/my-alternative-apollo-config.js
// this code from githubReadme: https://github.com/nuxt-community/apollo-module
export default function(context) {
  return {
    httpEndpoint: 'http://localhost:4000/graphql-alt',
    getAuth: () => 'Bearer my-static-token' // use this method to overwrite functions
  }
}
