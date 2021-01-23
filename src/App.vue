<template>
  <div id="app">
      <Navbar />

    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
    components: {Navbar},

}
</script>
<style lang="scss">

html,body,#app{
    width: 100%;
    height: 100%;
    *{
        margin: 0;
        padding: 0;
    }
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

</style>
