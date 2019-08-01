// plugins/apollo-error-handler.js
// this code from githubReadme: https://github.com/nuxt-community/apollo-module
export default (error, context) => {
  console.log(error)
  context.error({
    statusCode: 304,
    message: 'Server error'
  })
}
