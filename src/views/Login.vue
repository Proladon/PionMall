<template>
    <div id="login">

        <div class="login-form">
            <p class="title">{{register? 'Sign up' : 'Sign In'}}</p>
            <div class="input-wrapper">
                <input type="email" v-model="email" id="email" placeholder="user@gmail.com">

                <input v-if="register" type="text" v-model="username" autocomplete="off" id="username"
                    placeholder="User Name">
                

                <input type="password" v-model="password" id="password" placeholder="Password">
                
                <span class="warn" id="warn-text"></span>
            </div>

            
            
            <div v-if="!register">
                <button class="signin-btn" @click="signIn">Sign in</button>
                <p  class="notice">尚無帳戶 <span class="link" @click="register = true">註冊</span></p>
            </div>

            <div v-if="register">
                <button class="signin-btn" @click="signUp">Sign up</button>
                <p  class="notice">已有帳戶 <span class="link" @click="register = false">登入</span></p>
            </div>

        </div>
    </div>
</template>

<script>
import axios from "axios";
// import Joi from 'joi'
import {loginValidation, registerValidation} from '../../validation/validation'

export default {
  name: "Login",
  data() {
    return {
      register: false,
      username: "",
      password: "",
      email:"",
    };
  },

  methods: {

    InputValidate: function (type, data) {
        if(type === 'signin'){
            const {error} = loginValidation(data)
            if (error) return document.getElementById('warn-text').innerText = error.toString().split(':')[1]
        }
        else if(type === 'signup'){
            const {error} = registerValidation(data)
            console.log(error)
            if (error) return document.getElementById('warn-text').innerText = error.toString().split(':')[1]
        }
    },

    //:: Sign In
    signIn: function () {
      const user = {
        email: this.email,
        password: this.password,
      };

      // Validate Input
      if(this.InputValidate('signin', user)) return

    //  Signing
      axios.post(this.apiUrl + "/users/signin", user)
        .then((res) => {
            if (res.data === "Not found user") {
              alert("Not found user");
              // todo: logging in failed =? alert || sign up
            } 
            else {
              localStorage.setItem("Token", res.data.token);
              this.$router.push({ name: "User" });
              this.$store.commit("UPDATE_USER", res.data.user);
              this.$store.commit("UPDATE_LOGGED_STATE", true);
            }
        })
        .catch(err=>{
            document.getElementById('warn-text').innerText = err.response.data
        })

    },

    //:: Sign Up
    signUp: function () {
        
        // todo: sign up new user
      const user = {
          email: this.email,
        username: this.username,
        password: this.password,
      };
      console.log('a')
      // Validate Input
      if(this.InputValidate('signup', user)) return
      console.log('c')

      axios.post(this.apiUrl + "/users/signup", user).then((res) => {
        console.log(res.data);
      });
    },
  },

  computed: {
    logged() {
      return this.$store.state.logged;
    },
    apiUrl() {
      return this.$store.state.apiUrl;
    },
  },

  watch:{
      register(){
          document.getElementById('warn-text').innerText =''
      }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/varables.scss";

#login {
  width: 100%;
  height: 100%;
//   background: rgb(189, 228, 243);
  background-image: url("../assets/img/login.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}



.login-form {
  position: relative;
//   backdrop-filter: blur(5px);
  width: 20rem;
  height: 50%;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 5px 5px 12px 0.5px rgb(31, 31, 31);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.75);

  p.title {
    font-size: 3rem;
    margin: 0;
  }

    p .notice{
        font-size: 12px;
    }

    span.link{
        cursor: pointer;
        color: rgb(190, 240, 132);
    }

    span.warn{
        color: rgb(226, 35, 45);
    }


  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 50px;

    > input {
      border-radius: 5px;
      border: none;
      padding: 10px;
      box-sizing: border-box;
      outline: none;
    }

  }

  .signin-btn {
    cursor: pointer;
    font-size: 1.5rem;
    color: $prime-dark;
    border: rgb(86, 170, 214) solid 2px;
    border-radius: 5px;
    background-color: rgb(86, 170, 214);
    outline: none;

    &:hover {
      background-color: rgb(86, 170, 214);
    }
  }
}


</style>