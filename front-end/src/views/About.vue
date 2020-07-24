<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-button type="primary" v-on:click="hello">Hello</a-button>
  </div>
</template>

<script>
import api from '../services/api'
export default {
  methods: {
    hello: function() {
      api.hello()
    },
  },
}
</script>
