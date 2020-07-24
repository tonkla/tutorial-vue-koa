<template>
  <div id="app">
    <div id="nav" v-if="isAuthenticated">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <a href="#" style="margin-left: 30px" v-on:click.prevent="logout">Log Out</a>
    </div>
    <router-view />
  </div>
</template>

<script>
import 'ant-design-vue/dist/antd.css'
export default {
  computed: {
    isAuthenticated: function() {
      return this.$store.getters.isAuthenticated
    },
  },
  methods: {
    logout: function() {
      this.$store.commit('logout')
      if (!this.isAuthenticated) this.$router.push('/login')
    },
  },
}
</script>

<style>
#app {
  font-family: sans-serif;
  text-align: center;
  color: #2c3e50;

  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
