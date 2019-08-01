<template>
  <b-container>
    <b-row>
      <b-col class="text-center display-4">New Post</b-col>
    </b-row>
    <b-row>
      <b-card-group deck>
        <b-col
          v-for="post in posts"
          :key="post.id"
          sm="4"
          class="text-center d-flex justify-content-center my-3 point"
        >
          <b-card no-body class="mb-2 item-card zoom" @click="detail(post.id)">
            <!-- <p>{{ post.thumbnail }}</p> -->
            <b-card-img
              :src="post.thumbnail.url"
              img-alt="Image"
              height="200px"
              width="200px"
              img-top
            ></b-card-img>
            <b-card-body>
              <b-card-title>{{ post.title }}</b-card-title>
              <b-card-text>
                {{ post.title }}
                <br />
                {{ dateFormat(post.createdAt, 'YYYY/MM/DD hh:mm:ss') }}
                <br />
                {{ post.description }}
                <br />
              </b-card-text>
              <!-- <div v-for="tag in post.tag" :key="tag">
                <b-button variant="primary">{{ tag }}</b-button>
              </div>-->
            </b-card-body>
          </b-card>
        </b-col>
      </b-card-group>
    </b-row>
  </b-container>
</template>

<script>
// import about---data-fns
import format from 'date-fns/format'
import ja from 'date-fns/locale/ja'
import parse from 'date-fns/parse'
// import mapState from 'vuex'
import { mapState } from 'vuex'
// import { ALL_POSTS } from '../constants/graphql'
export default {
  components: {},
  computed: {
    ...mapState(['posts'])
  },
  methods: {
    detail(id) {
      console.log(id)
      this.$router.push(`./posts/${id}`)
    },
    dateFormat: function(date = new Date(), formatStr) {
      return format(parse(date), formatStr, { locale: ja })
    }
  }
  // apollo: {
  //   posts: ALL_POSTS
  // }
  // data: () => ({
  //   posts: [
  //     {
  //       id: 1,
  //       createdAt: '2018/09/23',
  //       title: 'sample post',
  //       description: 'sample post description',
  //       contents: 'sample post contents',
  //       thumbnail: {
  //         url: 'https://picsum.photos/800/400?image=80'
  //       }
  //     },
  //     {
  //       id: 2,
  //       createdAt: '2018/09/24',
  //       title: 'sample post2',
  //       description: 'sample post description2',
  //       contents: 'sample post contents2',
  //       thumbnail: {
  //         url: 'https://picsum.photos/800/400?image=90'
  //       }
  //     },
  //     {
  //       id: 3,
  //       createdAt: '2018/09/24',
  //       title: 'sample post3',
  //       description: 'sample post description3',
  //       contents: 'sample post contents3',
  //       thumbnail: {
  //         url: 'https://picsum.photos/800/400?image=100'
  //       }
  //     }
  //   ]
  // })
}
</script>

<style lang="scss" scoped>
.zoom {
  transform: scale(1);
  transition: 0.3s ease-in-out;
}
.zoom:hover {
  transform: scale(1.01);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.05);
}
.point {
  cursor: pointer;
}
</style>
