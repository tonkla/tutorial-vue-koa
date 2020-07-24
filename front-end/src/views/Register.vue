<template>
  <div class="register">
    <div class="wrapper">
      <div>
        <a-input type="text" placeholder="Email" v-model.trim="email" />
      </div>
      <div style="margin-top: 10px">
        <a-input type="password" placeholder="Password" v-model.trim="password" />
      </div>
      <div style="margin-top: 10px">
        <a-input type="password" placeholder="Confirm Password" v-model.trim="password2" />
      </div>
      <div style="margin-top: 10px">
        <a-button type="primary" v-on:click="register">Register</a-button>
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
      password2: '',
    }
  },
  methods: {
    register: function() {
      const isValid = this.email !== '' && this.password !== '' && this.password === this.password2
      if (isValid) {
        this.$store.dispatch('register', { email: this.email, password: this.password })
        this.$router.push('/login')
      }
    },
  },
}
</script>

<style scoped>
.register {
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
