<template>
    <div id="nav-bar">
        <router-link to="/">首頁</router-link>
        <router-link v-if="logged" to="/user">帳戶</router-link>
        <router-link v-if="!logged" to="/login">登入</router-link>
        <router-link v-if="logged" @click.native="signout" to=""
            >登出</router-link
        >
    </div>
</template>

<script>
export default {
    name: "Navbar",
    computed: {
        logged() {
            return this.$store.state.logged;
        },
        user() {
            return this.$store.state.user;
        },
    },
    methods: {
        signout() {
            this.$store.commit("UPDATE_LOGGED_STATE", false);
            this.$router.push({ name: "Login" });

            // todo: clear localstorage token
        },
    },
};
</script>

<style scoped lang="scss">
#nav-bar {
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
