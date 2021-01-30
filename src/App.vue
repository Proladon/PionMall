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
        <p v-for="data in apidata" :key="data.username">{{ data.username}}, {{data.password }}</p>
    </div>
</template>
<script>
import axios from "axios";

// Views
import Navbar from "@/components/Navbar.vue";
export default {
    components: { Navbar },
    data() {
        return {
            apidata: "",
            datatext: "",
            pass: "",
            apiUrl: "https://c8c486142b3b.ngrok.io/",
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
@import "./assets/scss/varables.scss";

html,body,#app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    text-align: center;
    color: $prime-dark;
    background: rgb(189, 228, 243);
}


</style>
