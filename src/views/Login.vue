<template>
   <div id="login">
           <form class="login-form" action="https://1a501be830dc.ngrok.io/" method="post">
               <h1>Login</h1>
               <input type="text" autocomplete="off" name="userName" id="" placeholder="User Name">
               <input type="password" name="password" id="" placeholder="Password">

                <div class="btn-wrapper">
                    <button type="submit">Sign up</button>
                    <button>Sign up</button>
                </div>
           </form>
   </div>
</template>

<script>
   export default {
       name: 'Login',
        
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