import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import api from '../services/api'

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
    _createPost: function(state, post) {
      state.posts = [post, ...state.posts]
    },
    _updatePost: function(state, post) {
      const _posts = state.posts.filter(_post => _post.id !== post.id)
      state.posts = [post, ..._posts]
      state.selectedPost = null
    },
    _deletePost: function(state, post) {
      state.posts = state.posts.filter(_post => _post.id !== post.id)
    },
  },
  actions: {
    getPosts: async ({ commit }) => {
      const posts = await api.getPosts()
      commit('setPosts', posts)
    },
    createPost: async ({ commit }, post) => {
      const _post = await api.createPost(post)
      if (_post) commit('_createPost', _post)
    },
    updatePost: async ({ commit }, post) => {
      const _post = await api.updatePost(post)
      if (_post) commit('_updatePost', _post)
    },
    deletePost: async ({ commit }, post) => {
      const deleted = await api.deletePost(post)
      if (deleted) commit('_deletePost', post)
    },
  },
  modules: {},
  plugins: [createPersistedState({ key: 'hellovue', paths: ['user'] })],
})
