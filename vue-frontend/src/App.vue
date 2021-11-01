<template>
  <div class="App">
    <Navbar />
    <router-view>
      
    </router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
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

	* {
  margin: 0px auto;
  padding: 0px;
  font-family: 'Open Sans', sans-serif;
}
.App {
  text-align: center;
  min-height: 100vh;
  height: 100%; 
  /* Rectangle 3: */ 
  background-image: linear-gradient(-87deg, #F2F5F6 0%, #DDE5E8 100%);
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
