<template>
  <div class="post-list">
    <div style="margin-top: 2rem;">
      <a-list bordered item-layout="horizontal">
        <a-list-item v-for="post in posts" v-bind:key="post.id" class="post-item">
          <div>{{ post.body }}</div>
          <div style="display: flex">
            <div style="margin-top: 1rem"><a-button v-on:click="setPost(post)">Edit</a-button></div>
            <div style="margin-top: 1rem; margin-left: 0.5rem">
              <a-button v-on:click="deletePost(post)">Delete</a-button>
            </div>
          </div>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
import { getPosts } from '../services/api'

export default {
  data: function() {
    return {}
  },
  computed: {
    posts: {
      get() {
        return this.$store.state.posts
      },
      set(posts) {
        this.$store.commit('setPosts', posts)
      },
    },
  },
  methods: {
    setPost: function(post) {
      this.$store.commit('setPost', post)
    },
    deletePost: function(post) {
      this.$store.commit('deletePost', post)
    },
    getPosts: async function() {
      this.posts = await getPosts() // this.$store.state.user.token)
    },
  },
  created: function() {
    this.getPosts()
  },
}
</script>

<style scoped>
.post-list {
  width: 500px;
}
.post-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
