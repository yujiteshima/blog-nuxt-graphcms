<template>
  <div>
    <Top v-if="isTop" />
    <DetailTop v-if="isDetail" />
    <DetailW v-if="isDetailW" />
    <Works v-if="isWorks" />
    <!-- <PortfolioTop v-if="isPortFolio_bk" /> -->
    <nuxt />
    <Footer v-if="!isPortFolio" />
  </div>
</template>
<script>
import Top from '../components/Top'
import DetailTop from '../components/DetailTop'
import Footer from '../components/Footer'
import Works from '../components/Works'
import DetailW from '../components/DetailW'
// import PortfolioTop from '../components/PortfolioTop'
export default {
  components: {
    Top,
    DetailTop,
    DetailW,
    Works,
    // PortfolioTop,
    Footer
  },
  computed: {
    isTop() {
      if (this.$route.path === '/posts') {
        return true
      } else {
        return false
      }
    },
    isDetail() {
      if (this.$route.path.match(/posts\/[A-Za-z0-9]+/)) {
        return true
      } else {
        return false
      }
    },
    isDetailW() {
      if (this.$route.path.match(/works\/.+$/)) {
        return true
      } else {
        return false
      }
    },
    isPortFolio() {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    },
    isWorks() {
      if (this.$route.path === '/works') {
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
  /* font-family: sans-serif, 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; */
  font-family: Quicksand, 游ゴシック体, 'Yu Gothic', YuGothic,
    'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo,
    Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
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
</style>
