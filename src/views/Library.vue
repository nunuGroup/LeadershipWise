<template>
  <div class="stack full">
    <div class="library-banner flex">
        <h2>Component Library</h2>
    </div>
    <div class="library-list">
      <div class="library-item">
        <div class="item-inner">
          <Navbar :titles="['Home','About','Contact']" :paths="['#','#','#']" />
          <p>Navbar component takes 2 props of type array: titles and paths</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: "Library",
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_global';

.library-banner {
  background: $colorLightGray;
  height: 400px;
  width: 100%;
  margin: 0px;
  z-index: -1;
}

.library-list {
  padding: $pad;
}

.library-item {
background: $colorLightGray;
  width: 80%;
  padding: $pad;
  border-radius: $rad;
}
</style>