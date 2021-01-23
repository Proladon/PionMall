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
    background-color: #2c3e50;
}

</style>