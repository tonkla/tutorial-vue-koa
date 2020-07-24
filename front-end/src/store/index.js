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
    _login: function(state, user) {
      state.user = user
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
    register: async ({ commit }, payload) => {
      await api.register(payload)
    },
    login: async ({ commit }, payload) => {
      const user = await api.login(payload)
      if (user) commit('_login', user)
    },
    getPosts: async ({ commit, state }) => {
      const { token } = state.user
      const posts = await api.getPosts(token)
      commit('setPosts', posts)
    },
    createPost: async ({ commit, state }, post) => {
      const { token } = state.user
      const _post = await api.createPost(token, post)
      if (_post) commit('_createPost', _post)
    },
    updatePost: async ({ commit, state }, post) => {
      const { token } = state.user
      const _post = await api.updatePost(token, post)
      if (_post) commit('_updatePost', _post)
    },
    deletePost: async ({ commit, state }, post) => {
      const { token } = state.user
      const deleted = await api.deletePost(token, post)
      if (deleted) commit('_deletePost', post)
    },
  },
  modules: {},
  plugins: [createPersistedState({ key: 'hellovue', paths: ['user'] })],
})
