<template>
  <b-container>
    <b-row class="pt-4">
      <b-col cols="10" offset="1">
        <b-col cols="12">
          <div v-html="$md.render(post.content)"></div>
        </b-col>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import format from 'date-fns/format'
import ja from 'date-fns/locale/ja'
import parse from 'date-fns/parse'

import { mapState } from 'vuex'
import Prism from '~/plugins/prism'
export default {
  computed: {
    ...mapState(['portf']),
    post() {
      const targetPost = this.portf.find(
        v => v.slug === this.$route.params.slug
      )
      return targetPost
    }
  },
  head() {
    return {
      title: this.post.slug
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

<style lang="scss" scoped></style>
