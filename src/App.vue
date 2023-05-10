<template>
  <div class="bg-gradient-to-r from-indigo-950 via-violet-900 to-indigo-950 h-full" > 
    <navbarComponent v-if="!$route.meta.hideNavbar"/>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import navbarComponent from './components/navbar.vue';

export default {
  name: 'App',
  components: {
    navbarComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  height: 100vh;
}
/* @import'~bootstrap/dist/css/bootstrap.css'; */

</style>
