<template>
   <div id="user-view">
       <h1>User Page</h1>
       <h2>{{user}}</h2>
   </div>
</template>

<script>
   export default {
       name: 'User',
       computed:{
           logged(){return this.$store.state.logged},
           user() {return this.$store.state.user},
       },
       mounted(){
           if(!this.logged){
               this.$router.push({name:'Home'})
           }
       }
   }
</script>

<style scoped lang="scss">
   #user-view{
       width: 100%;
       height: 100%;
   }
</style>