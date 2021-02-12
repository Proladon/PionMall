<template>
    <div id="app">
        <Navbar />
        <router-view />

    </div>
</template>
<script>

// Views
import Navbar from "@/components/Navbar.vue";
export default {
    components: { Navbar },
    data() {
        return {
            apidata: "",
            datatext: "",
            pass: "",
            // apiUrl: "https://f953dfd37510.ngrok.io/",
        }
    },
    computed:{
        apiUrl(){return this.$store.state.apiUrl}
    }

};
</script>
<style lang="scss">
@import "./assets/scss/varables.scss";

html,body,#app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    
    -ms-overflow-style: none;
}

body::-webkit-scrollbar {
    display: none;
    
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    text-align: center;
    color: $prime-dark;
    background: rgb(33, 40, 53),;
    // background-image: url('./assets/img/bg.png');
    // background-size: cover;
}


</style>
