<template>
  <b-container fluid>
    <b-row id="top" class="header">
      <b-col cols="12" class="d-flex align-items-center justify-content-center">
        <b-row>
          <b-col cols="4" class="text-center backhome" @click="gohome">
            Portfolio Top
            <!-- <b-badge variant="secondary">Portfolio Top</b-badge> -->
          </b-col>
          <b-col cols="12" class="blog-title text-center">Works Page</b-col>
          <b-col cols="12" class="blog-sub-title text-center pb-5"
            >Nuxt.js + GraphCMS + Firebase</b-col
          >
          <!-- <b-col v-show="getSelectWord" cols="12" class="pt-5 text-center">
            <span class="message">You are narrowing down....</span>
          </b-col>-->
          <!-- <b-col
            v-show="getSelectWord"
            cols="12"
            class="selectInfo text-center"
          >
            <span class="all-item" @click="allItems">All Items</span>
            <span class="pipe">|</span>
            <span class="select-word">{{ getSelectWord }}</span>
          </b-col>-->
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getSelectWord'])
  },
  methods: {
    allItems() {
      this.$store.dispatch('allItems')
    },
    gohome() {
      this.$router.push('/')
    }
  }
}
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

  color: cornsilk;
  height: 60vh;
}
.blog-title {
  font-size: 4em;
  //font-family: Economica, sans-serif;
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

.backhome {
  cursor: pointer;
  position: relative;
  padding: 0.1em 0.3em;
  display: inline-block;
  transition: 0.3s;
  color: #ff8f00;
}
.backhome::before,
.backhome::after {
  position: absolute;
  content: '';
  width: 0;
  height: 1px;
  background-color: #ff8f00;
  transition: 0.3s;
}
.backhome::before {
  top: 0;
  left: 0;
}
.backhome::after {
  bottom: 0;
  right: 0;
}
.backhome:hover::before,
.backhome:hover::after {
  width: 100%;
}
</style>
