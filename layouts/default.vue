<template>
  <div>
    <!-- <transition name="view"> -->
    <Top v-if="isTop" />
    <DetailTop v-else />
    <!-- </transition> -->
    <!-- <Header /> -->
    <!-- <Title /> -->
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Top from '../components/Top'
import DetailTop from '../components/DetailTop'
import Footer from '../components/Footer'
// import Header from '../components/Header'
// import Title from '../components/Title'
export default {
  components: {
    // Header,
    // Title,
    Top,
    DetailTop,
    Footer
  },
  computed: {
    isTop() {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style>
html {
  font-family: sans-serif, 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  /* background-color: azure; */
  background-color: #f1f1f1;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

/* .view-enter-active,
.view-leave-active {
  transition: opacity 0.5s;
}
.view-leave-active {
  transition: opacity 1s, transform 1s;
}
.view-enter {
  opacity: 0;
  transform: translateY(-10px);
}
.view-leave-to {
  opacity: 0;
  transform: translateY(10px);
} */
</style>
