<template>
    <div class="parent">
      <div class="div1 dash-item"></div>
      <div class="div2 dash-item"></div>
      <div class="div3 dash-item"></div>
      <div class="div4 dash-item"></div>
    </div>  
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_global';

.logo {
  background-image: url('../assets/logos/logo-green.svg');
  height: 500px;
  width: 500px;
}

.parent {
  background: #e0e0e0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 12px;
  height: 90vh;
  width: 100%;
  padding: 12px;
  bottom: 0px;
  margin-top: auto;
}

.div1 { grid-area: 1 / 1 / 4 / 4; }
.div2 { grid-area: 1 / 4 / 4 / 7; }
.div3 { grid-area: 4 / 1 / 7 / 5; }
.div4 { grid-area: 4 / 5 / 7 / 7; }

.dash-item {
  background: white;
  height: 100%;
  width: 100%;
  border-radius: 12px;
}

</style>