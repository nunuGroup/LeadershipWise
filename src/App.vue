<script>
//import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: "App",
  components: {
    //Navbar
    Sidebar
  }
}
</script>>

<template>
  <!--Navbar :titles="['Home','Library']" :paths="['/','/library']" /-->
  <div class="app-container">
    <Sidebar />
    <router-view/>
  </div>  
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

.app-container {
  display: flex;
  background: #e0e0e0;
}

body {
  font-family: 'Lato', 'sans-serif';
  margin: 0px;
  padding: 0px;
}
</style>
