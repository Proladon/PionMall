<template>
  <div id="login">
    <div class="login-form">
      <p>Login</p>
      <div class="input-wrapper">
        <input
          type="text"
          v-model="username"
          autocomplete="off"
          name="userName"
          id="username"
          placeholder="User Name"
        />
        <input
          type="password"
          v-model="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>

      <button class="signin-btn" @click="signIn">Sign in</button>
      <button class="signin-btn" @click="signUp">Sign up</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    signIn: function () {
      if (this.username.trim() === "" || this.password.trim === "") {
        alert("No Epmty");
        return;
      }

      const user = {
        username: this.username,
        password: this.password,
        token: localStorage.getItem("Token"),
      };

      axios.get(this.apiUrl + "/user/"+ this.username, user).then((res) => {
        if (res.data === "Not found user") {
          alert("Not found user");

          // todo: logging in failed =? alert || sign up
        } else {
          localStorage.setItem("Token", res.data.token);
          this.$router.push({ name: "User" });
          this.$store.commit("UPDATE_USER", res.data.user);
          this.$store.commit("UPDATE_LOGGED_STATE", true);
        }
      });
    },

    signUp: function () {
      // todo: sign up new user
      const data = {
        username: this.username,
        password: this.password,
      };

      axios.post(this.apiUrl + "/signup", data).then((res) => {
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
};
</script>

<style scoped lang="scss">
@import "../assets/scss/varables.scss";

#login {
  width: 100%;
  height: 100%;
  // background: rgb(189, 228, 243);
  background-image: url("../assets/img/login.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login-form {
  position: relative;
  backdrop-filter: blur(5px);
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
  background: rgba(255, 255, 255, 0.45);

  p {
    font-size: 3rem;
    margin: 0;
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