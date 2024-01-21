<!-- src/views/Register.vue -->
<template>
    <div>
      <h2>Registration Page</h2>
      <form @submit.prevent="register">
        <label for="name">Name:</label>
        <input v-model="name" type="text" id="name" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: ''
      };
    },
    methods: {
      register() {
        this.$store.dispatch('registerUser', { name: this.name });
        this.$router.push('/login');
      }
    }
  };
  </script>
  