<template>
  <div class="home">
    <PostForm />
    <PostList />
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'

export default {
  name: 'Home',
  components: {
    PostForm,
    PostList,
  },
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
