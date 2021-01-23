<template>
   <div id="nav-bar">
       <router-link to="/">首頁</router-link>
       <router-link to="/login">登入</router-link>
   </div>
</template>

<script>
   export default {
       name: 'Navbar',
   }
</script>

<style scoped lang="scss">
   #nav-bar{
       background: #2c3e50;
       display: flex;
       justify-content: center;

       a {
        font-weight: bold;
        color: white;
        padding: 10px;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
   }
</style>