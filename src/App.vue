<script>
import Sidebar from '@/components/Sidebar.vue';
import Topbar from '@/components/Topbar.vue';

export default {
  name: "App",
  components: {
    Sidebar,
    Topbar
  }
}
</script>>

<template>
  <div class="topbar-container"><Topbar /></div>
  <div class="app-container">
    <Sidebar />
    <router-view/>
  </div>  
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

.topbar-container {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 80px;
  z-index: 999;
}

.app-container {
  display: flex;
  background: #eee;
}

body {
  font-family: 'Lato', 'sans-serif';
  margin: 0px;
  padding: 0px;
}
</style>
