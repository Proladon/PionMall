<template>
   <div id="login">
       data: {{apidata}}
        <button @click="getdata">Click</button>
   </div>
</template>

<script>
import axios from 'axios'
   export default {
       name: 'Login',
        
   }
</script>

<style scoped lang="scss">
   #login{
       width: 100%;
       height: 100%;
   }
</style>