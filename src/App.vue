<template>
  <Navbar :titles="['Home','Library']" :paths="['/','/library']" />
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: "App",
  components: {
    Navbar
  }
}
</script>>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

body {
  font-family: 'Lato', 'sans-serif';
  margin: 0px;
  padding: 0px;
}
</style>
