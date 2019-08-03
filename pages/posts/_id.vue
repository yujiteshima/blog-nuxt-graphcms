<template>
  <b-container>
    <b-row class="pt-4">
      <b-col cols="10" offset="1">
        <!-- <b-col cols="12">img_url: {{ post.thumbnail.url }}</b-col>
        <b-col cols="12">id: {{ this.$route.params.id }}</b-col>
        <b-col cols="12">title: {{ post.title }}</b-col>
        <b-col cols="12">description: {{ post.description }}</b-col>-->
        <!-- <b-col cols="12">content: {{ post.content }}</b-col> -->
        <!-- <b-col cols="12">
          <b-img :src="post.thumbnail.url" fluid></b-img>
        </b-col>-->

        <b-col cols="12">
          <div v-html="$md.render(post.content)"></div>
        </b-col>
        <b-col cols="12">
          createdAt:
          {{ dateFormat(post.createdAt, 'YYYY/MM/DD') }}
        </b-col>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import about----date-fns
import format from 'date-fns/format'
import ja from 'date-fns/locale/ja'
import parse from 'date-fns/parse'

import { mapState } from 'vuex'
import Prism from '~/plugins/prism'
export default {
  computed: {
    ...mapState(['posts']),
    post() {
      const targetPost = this.posts.find(v => v.id === this.$route.params.id)
      return targetPost
    }
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    dateFormat: function(date = new Date(), formatStr) {
      return format(parse(date), formatStr, { locale: ja })
    }
  }
}
</script>

<style lang="scss" scoped>
// h1 {
//   font-size: 26px;
// }
// h2 {
//   font-size: 26px;
//   border-bottom: solid 2px #333;
// }
// h3 {
//   font-size: 23px;
//   border-bottom: solid 1px #333;
// }
// p {
//   font-size: 16px;
// }
</style>
