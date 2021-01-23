<template>
  <div id="app">
      <input type="text" name="" id="" v-model="datatext">
      <button @click="senddata">Create</button>


      <button @click="getdata">Refresh</button>
      <p>{{pass}}</p>
      <hr>
      <h2>CLOUD DB DATA:</h2>
      <p v-for="data in apidata" :key="data.name">{{data.name}}</p>
      
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
            return{
                apidata:'',
                datatext: '',
                pass: ''
            }
        },
       methods:{
           senddata: function(){
               axios({
                   url:'https://c1d3683eb2e1.ngrok.io/send',
                   method: 'post',
                   data:{
                       name:this.datatext
                   }
               }).then(res=>{
                   if(res.data === 'success'){
                       this.pass = 'Create data success!'
                   }else{
                       this.pass = 'Error'
                   }
               })
           },

           getdata: function (){
               axios({
                   url:'https://c1d3683eb2e1.ngrok.io/test'
               }).then(res=>{
                   this.apidata = res.data
               })
           }
       }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
