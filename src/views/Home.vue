<template>
    <div class="home"></div>
</template>

<script>
import axios from "axios";
export default {
    name: "Home",
    components: {},
    computed: {
        apiUrl() {
            return this.$store.state.apiUrl;
        },
    },
    mounted() {
        axios.post(this.apiUrl + "/check", {
            token: localStorage.getItem("Token"),
        });
    },
};
</script>
