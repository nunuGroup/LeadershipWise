<template>
    <div class="parent">
      <div class="div1 dash-item"></div>
      <div class="div2 dash-item"></div>
      <div class="div3 dash-item"></div>
    </div>  
</template>

<script>
export default {
  name: 'TeamOrganization',
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
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 12px;
  height: 90vh;
  width: calc(100vw - 424px);
  padding: 12px;
  margin-top: 84px;
}

.div1 { grid-area: 1 / 6 / 5 / 9; }
.div2 { grid-area: 5 / 6 / 9 / 9; }
.div3 { grid-area: 1 / 1 / 9 / 6; }

.dash-item {
  background: white;
  height: 100%;
  width: 100%;
  border-radius: 12px;
}

</style>