import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    posts: [],
    selectedPost: null,
  },
  getters: {
    isAuthenticated: state => {
      return state.user !== null
    },
  },
  mutations: {
    login: function(state, { email }) {
      state.user = { email }
    },
    logout: function(state) {
      state.user = null
    },
    setPost: function(state, post) {
      state.selectedPost = post
    },
    setPosts: function(state, posts) {
      state.posts = posts
    },
    createPost: function(state, post) {
      state.posts = [post, ...state.posts]
    },
    updatePost: function(state, post) {
      const _posts = state.posts.filter(_post => _post.id !== post.id)
      state.posts = [post, ..._posts]
      state.selectedPost = null
    },
    deletePost: function(state, post) {
      state.posts = state.posts.filter(_post => _post.id !== post.id)
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState({ key: 'hellovue', paths: ['user'] })],
})
