<template>
  <b-container fluid>
    <b-row class="header">
      <b-col cols="12" class="d-flex align-items-center justify-content-center">
        <b-row>
          <b-col cols="12" class="blog-title text-center">Teshi Blog</b-col>
          <b-col cols="12" class="blog-sub-title text-center"
            >Nuxt.js + GraphCMS + Firebase</b-col
          >
        </b-row>
      </b-col>
    </b-row>
    <!-- <div class="text-center header"> -->
    <!-- <img src="../assets/images/IMG_5384.jpg" /> -->
    <!-- </div> -->
  </b-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  background: #24c6dc; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #514a9d,
    #24c6dc
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #514a9d,
    #24c6dc
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  // background-color: cadetblue;
  // background-image: url('../assets/images/IMG_5384.jpg');
  // background-size: cover;
  // background-attachment: fixed;
  color: cornsilk;
  height: 60vh;
}
.blog-title {
  font-size: 4em;
}
.blog-sub-title {
  font-size: 16px;
}
</style>
