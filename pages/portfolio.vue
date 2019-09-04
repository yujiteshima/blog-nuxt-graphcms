<template>
  <b-container fluid>
    <b-row id="top" class="header">
      <b-col cols="12" class="d-flex align-items-center justify-content-center">
        <b-row>
          <b-col cols="12" class="blog-title text-center"
            >Yuji Teshima Portfolio Page</b-col
          >
          <b-col cols="12" class="blog-sub-title text-center pb-5"
            >Nuxt.js + Firebase</b-col
          >
          <b-col
            cols="12"
            class="d-flex align-items-center justify-content-center"
          >
            <b-row class="top-nav">
              <b-col cols="3" class="top-menu">Blog</b-col>
              <b-col cols="3" class="top-menu">About</b-col>
              <b-col cols="3" class="top-menu">Works</b-col>
              <b-col cols="3" class="top-menu">Contact</b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  // computed: {
  //   ...mapGetters(['getSelectWord'])
  // },
  // methods: {
  //   allItems() {
  //     this.$store.dispatch('allItems')
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.header {
  background: #24c6dc; /* fallback for old browsers */
  background: linear-gradient(to right, #15ddbc 0%, #24c6dc 100%);
  opacity: 0.5;
  animation: huerotator 20s infinite alternate;
  color: cornsilk;
  height: 100vh;
}
@keyframes huerotator {
  0% {
    -webkit-filter: hue-rotate(0deg);
    filter: hue-rotate(0deg);
  }

  100% {
    -webkit-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
  }
}
.blog-title {
  font-size: 4em;
  //font-family: Economica, sans-serif;
}
@media screen and (max-width: 768px) {
  .blog-title {
    font-size: 2em;
  }
}
.blog-sub-title {
  font-size: 16px;
}

.selectInfo {
  font-size: 18px;
  .all-item {
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover {
      color: coral;
      border-bottom: 1px solid coral;
      letter-spacing: 1px;
    }
  }
  .pipe {
    font-size: 24px;
  }

  .select-word {
    border-bottom: 1px solid cornsilk;
  }
}

.top-menu {
  font-size: 20px;
  margin: 15px 0;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    color: coral;
    margin: 14px 0;
    border-bottom: 1px solid coral;
    letter-spacing: 3px;
  }
}
@media screen and (max-width: 768px) {
  .top-menu {
    font-size: 14px;
  }
}
</style>
