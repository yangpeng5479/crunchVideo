<template>
  <div id="app">
    <router-view />
    <Foot/>
  </div>
</template>

<script>
import Foot from './components/comFooter.vue'
export default {
   components: {
    Foot
  },
  name: 'App'
}
</script>

<style>
html{
  background: #1a1b1a;
}
#app {
  font-family:'GillSans','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   /* font-family: ; */
  color: #FFFFFF;
   position: relative;
  min-height: 100vh;
}
#env {
 height: calc(100vh - 5.8125rem);
  padding: 1rem;
}
#enr{
   padding: 1rem;
}
#eplay{
      padding: 1rem 0rem 0rem 0rem;
}

*{
  margin: 0;
  padding: 0;
 
}
</style>
