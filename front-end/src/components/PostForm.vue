<template>
  <div class="form">
    <div>
      <a-textarea v-model="post.body"></a-textarea>
    </div>
    <div style="margin-top: 0.5rem;">
      <a-button v-if="post.id" type="primary" v-on:click="updatePost">Update Post</a-button>
      <a-button v-else type="primary" v-on:click="createPost">Create Post</a-button>
    </div>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {
  data: function() {
    return {
      blankPost: { body: '' },
    }
  },
  computed: {
    post: function() {
      return this.$store.state.selectedPost
        ? { ...this.$store.state.selectedPost }
        : { ...this.blankPost }
    },
  },
  methods: {
    createPost: function() {
      const post = { ...this.post, id: nanoid() }
      this.$store.commit('createPost', post)
      this.blankPost = { ...this.blankPost }
    },
    updatePost: function() {
      this.$store.commit('updatePost', this.post)
    },
  },
}
</script>

<style scoped>
.form {
  width: 500px;
}
</style>
