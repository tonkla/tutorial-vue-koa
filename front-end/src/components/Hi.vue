<template>
  <div class="hi">
    <div>Hi, {{ name }}</div>
    <input type="text" v-model="name" />
    <button v-on:click="sayHi">Hi</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: 'John',
    }
  },
  methods: {
    sayHi: function() {
      alert(`Hi, ${this.fullname}`)
    },
  },
  computed: {
    fullname: function() {
      return `${this.name} Hammer`
    },
  },
}
</script>

<style scoped>
.hi {
  font-size: 3em;
}
</style>
