<template>
    <div id="app">
        <Navbar />
        <router-view />
        <input type="text" name="" id="" v-model="datatext" />
        <button @click="senddata">Create</button>
        <button @click="getdata">Refresh</button>
        <p>{{ pass }}</p>
        <hr />
        <h2>CLOUD DB DATA:</h2>
        <p v-for="data in apidata" :key="data.name">{{ data.name }}</p>
    </div>
</template>
<script>
import axios from "axios";

// Views
import Navbar from '@/components/Navbar.vue'
export default {
    components:{Navbar},
    data() {
        return {
            apidata: "",
            datatext: "",
            pass: "",
            apiUrl: "https://c1d3683eb2e1.ngrok.io/",
        };
    },
    methods: {
        senddata: function() {
            axios
                .post(this.apiUrl + "createUser", { name: this.datatext })
                .then((res) => {
                    if (res.data === "success") {
                        this.pass = "Create data success!";
                    } else {
                        this.pass = "Error";
                    }
                });
        },

        getdata: function() {
            axios({
                url: this.apiUrl + "getAll",
            }).then((res) => {
                this.apidata = res.data;
            });
        },
    },
};
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
