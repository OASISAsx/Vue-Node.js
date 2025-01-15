<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '../src/components/Navbar.vue'

// import '@/output.css'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <Navbar/>
  <div class="App">
    <RouterView />
  </div>
  
  

</template>

<style>

/* .App {
width: 100vh;
} */


</style>
