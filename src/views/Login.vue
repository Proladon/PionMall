<template>
   <div id="login">
           <div class="login-form" action="" method="post">
               <h1>Login</h1>
               <input type="text" v-model="username" autocomplete="off" name="userName" id="username" placeholder="User Name">
               <input type="password" v-model="password" name="password" id="password" placeholder="Password">

                <div class="btn-wrapper">
                </div>

           </div>
            <button @click="signUp">Sign up</button>
            <button @click="signIn">Sign in</button>
   </div>
</template>

<script>
import axios from 'axios'
   export default {
       name: 'Login',
       data(){
           return{
               username:'',
               password:''
           }
       },
        methods:{
            
            signIn: function(){
                if(this.username.trim() === '' || this.password.trim === ''){
                    alert("No Epmty") 
                    return
                }

                const data = {
                    username: this.username,
                    password: this.password
                }

                axios.post('https://c8c486142b3b.ngrok.io/user/signin',data)
                    .then(res=>{
                        if(res.data === 'not found'){
                            alert('not found')
                            // todo: logging in failed =? alert || sign up

                        }else{
                            alert(res.data)
                            // todo: logged in 
                        }
                    })
            },

            signUp: function(){
            // todo: sign up new user
            const data = {
                    username: this.username,
                    password: this.password
            }

            axios.post('https://c8c486142b3b.ngrok.io/user/signup',data)
                .then(res=>{
                    console.log(res.data)
                })
        }
        },


        
   }
</script>

<style scoped lang="scss">
   #login{
       width: 100%;
       height: 100%;
       background: rgb(189, 228, 243);
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
   }

   .login-form{
       width: 15rem;
       height: 50%;
       padding: 30px;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       box-shadow: 5px 5px 12px 0.5px rgb(51, 51, 51);
       border-radius: 5px;

       >input{
           display: block;
           padding: 10px;
           margin: 10px;
           border-radius: 5px;
           border: none;
       }

       .btn-wrapper{
           display: flex;
           gap: 15px;
       }
   }
</style>