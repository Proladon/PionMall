<template>
   <div id="login">
       <div class="login-card">
           <form action="" method="post">
               <input type="text" name="account" id="">
                <input type="submit" value="登入">
           </form>
            <button type="submit">註冊</button>
       </div>
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
       display: flex;
       justify-content: center;
       align-items: center;
   }

   .login-card{
       width: 50%;
       height: 50%;
       box-shadow: 3px 3px 15px 3px #2c3e50;

   }
</style>