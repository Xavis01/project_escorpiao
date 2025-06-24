<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue';
import WhatsappButton from './components/WhatsappButton.vue';
</script>

<template>
  <NavBar />
  <WhatsappButton />
  <router-view />
  <Footer />
</template>


<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
