<template>
    <div id="nav-bar">
        <router-link to="/">首頁</router-link>
        <p>{{ user }}</p>

        <router-link to="/Cart">購物車</router-link>
        <router-link v-if="logged" to="/User">帳戶</router-link>
        <router-link v-if="!logged" to="/Login">登入</router-link>
        <a id="signout-btn" v-if="logged" @click="signout">登出</a>

        <div id="site-settings" @click="openSiteSettings">⚙</div>

        <modal name="site-settings" class="test" width="300" height="100">
            <p>API URL</p>
            <input type="url" id="api_url">
            <div class="confirm-btn" @click="changeApiUrl">Confirm</div>
        </modal>
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

        openSiteSettings(){
            this.$modal.show("site-settings");
        },

        changeApiUrl(){
            const url = document.getElementById('api_url').value
            this.$store.commit('UPDATE_API', url)
            this.$modal.hide('site-settings')
        }
    },
};
</script>

<style scoped lang="scss">
#nav-bar {
    position: relative;
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

    #signout-btn {
        color: rgb(255, 105, 158);
    }
}

#site-settings {
    background-color: cadetblue;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
}

.confirm-btn{
    cursor: pointer;
    // border: solid 1px darkslategrey;
}

</style>
