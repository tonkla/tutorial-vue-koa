<template>
  <div class="login">
    <div class="wrapper">
      <div>
        <a-input type="text" placeholder="Email" v-model="email" />
      </div>
      <div style="margin-top: 10px">
        <a-input type="password" placeholder="Password" v-model="password" />
      </div>
      <div style="margin-top: 10px">
        <a-button type="primary" v-on:click="login">Log In</a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login: function() {
      this.$store.commit('login', { email: this.email, password: this.password })
      if (this.$store.getters.isAuthenticated) {
        this.$router.push('/')
      }
    },
  },
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}
.wrapper {
  width: 300px;
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 30px;
}
</style>
