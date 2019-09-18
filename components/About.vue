<template>
  <b-container fluid class="header">
    <b-container>
      <b-row id="top" class="fade-in">
        <b-col
          cols="12"
          class="detail-text d-flex align-items-center justify-content-left"
        >
          <b-row>
            <b-col cols="12" class="blog-title" @click="goHome"
              >Teshi Blog</b-col
            >
            <b-col cols="12" class="title">{{ post.title }}</b-col>
            <b-col cols="12" class="info">
              <font-awesome-icon
                icon="calendar-alt"
                class="tags"
              ></font-awesome-icon>
              {{ dateFormat(post.date, 'YYYY/MM/DD') }}
              <span class="pl-3">
                <font-awesome-icon
                  v-if="post.tag1"
                  icon="tags"
                  class="tags"
                ></font-awesome-icon>
              </span>
              <b-badge v-if="post.tag1" variant="secondary">{{
                post.tag1
              }}</b-badge>
              <b-badge v-if="post.tag2" variant="secondary">{{
                post.tag2
              }}</b-badge>
              <b-badge v-if="post.tag3" variant="secondary">{{
                post.tag3
              }}</b-badge>
              <b-badge v-if="post.tag4" variant="secondary">{{
                post.tag4
              }}</b-badge>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!-- <div class="text-center header"> -->
      <!-- <img src="../assets/images/IMG_5384.jpg" /> -->
      <!-- </div> -->
    </b-container>
  </b-container>
</template>

<script>
import format from 'date-fns/format'
import ja from 'date-fns/locale/ja'
import parse from 'date-fns/parse'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['posts']),
    post() {
      const targetPost = this.posts.find(
        v => v.slug === this.$route.params.slug
      )
      return targetPost
    }
  },
  methods: {
    dateFormat: function(date = new Date(), formatStr) {
      return format(parse(date), formatStr, { locale: ja })
    },
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
// .header {
//   background: #24c6dc; /* fallback for old browsers */
//   background: -webkit-linear-gradient(
//     to right,
//     #514a9d,
//     #24c6dc
//   ); /* Chrome 10-25, Safari 5.1-6 */
//   background: linear-gradient(
//     to right,
//     #514a9d,
//     #24c6dc
//   ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

//   // background-color: cadetblue;
//   // background-image: url('../assets/images/IMG_5384.jpg');
//   // background-size: cover;
//   // background-attachment: fixed;
//   color: cornsilk;
//   height: 60vh;
// }

// グラデーション
.header {
  background: #24c6dc; /* fallback for old browsers */
  background: linear-gradient(to right, #514a9d 0%, #24c6dc 100%);
  opacity: 0.5;
  animation: huerotator 20s infinite alternate;
  color: cornsilk;
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
// グラテーションここまで
.detail-text {
  height: 60vh;
  font-weight: normal;
}
.blog-title {
  cursor: pointer;
  font-size: 18px;
  font-weight: bolder;
  transition: 0.5s ease-in-out; /* どれだけ時間をかけて変化するか*/
  &:hover {
    color: coral;
    border-bottom: 1px solid coral;
    letter-spacing: 1px;
  }
}
.title {
  font-size: 40px;
}

.info {
  font-size: 14px;
}
/* 1秒かけて透明度を遷移 */
// .v-enter-active,
// .v-leave-active {
//   transition: opacity 1, transform 1s;
// }
/* 見えなくなるときの透明度 */
// .v-enter {
//   opacity: 0;
// }
// .v-leave-to {
//   opacity: 0;
// }
// .view-enter-active,
// .view-leave-active {
//   transition: opacity 0.5s;
// }
// .view-leave-active {
//   position: absolute;
// }
// .view-enter,
// .view-leave-to {
//   opacity: 0;
// }

// .v-enter-active,
// .v-leave-active {
//   transition: opacity 1s, transform 1s;
// }
/* 表示するときは左から */
// .v-enter {
//   opacity: 0;
//   transform: translateY(-10px);
// }
/* 消えるときは下へ */
// .v-leave-to {
//   opacity: 0;
//   transform: translateY(10px);
// }
.fade-in {
  animation-name: fadein;
  animation-duration: 2s;
  animation-iteration-count: 1;
}
@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
