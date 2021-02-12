<template>
    <div class="home">
        <div class="head-banner">
            <div class="highlight" :style="`background-image: url(${highlight})`">
                <h1>Modern Kitchen</h1>

            </div>
            
        
            <div class="product-category" @click="cate($event)">
                <div class="category-item" 
                    v-for="cate in category" 
                    :key="cate.name"
                    :style="`background-image: url(${cate.bg})`">
                    <b><span class="category-name">{{cate.name}}</span></b>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from "axios";
export default {
    name: "Home",
    components: {},
    data(){
        return{
            highlight: "https://i.imgur.com/gD6Mb5g.gif",
            category: [
                {
                    name: "Room",
                    bg: "https://i.imgur.com/HGK7DBH.jpg"
                },
                {
                    name: "BathRoom",
                    bg: "https://i.imgur.com/O7yoddu.gif"
                },
                {
                    name: "Lobby",
                    bg: "https://i.imgur.com/36M6f7y.gif"
                },
                {
                    name: "Kitchen",
                    bg: "https://i.pinimg.com/564x/a8/f3/ea/a8f3ea3626c781026d5e599405a706be.jpg"
                },
            ]
        }
    },
    computed: {
        apiUrl() {
            return this.$store.state.apiUrl;
        },
    },
    methods:{
        cate(e){
            if(e.target.children.length > 0){
                this.$router.push('products/' + e.target.children[0].outerText)
            }else{
                this.$router.push('products/' + e.target.outerText)
            }
        }
    },
    mounted() {
        // axios.post(this.apiUrl + "/check", {
        //     token: localStorage.getItem("Token"),
        // });
    },
};
</script>
<style scoped lang="scss">
.head-banner{
    width: 100%;
    height: 500px;
    display: flex;
    gap: 5px;
}

.highlight{
    width: 100%;
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: white;
}

.product-category{
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
    color: white;
    gap: 5px;

    
    
    .category-item{
        cursor: pointer;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: brightness(0.8);

        &:hover{
            filter: brightness(1);
        }
    }

    .category-name{
        font-size: 2vw;
        text-shadow: black 1px 1px 3px;
    }
}
</style>