<template>
  <div class="products" >
    <h1>{{ $route.params.category }}</h1>

    <div class="products-list" @click="test($event)">
        <div class="product-item" v-for="(item, index) in products" :key="item.img" >
            <!-- <img :src="item.img" alt="" /> -->
            <div class="product-image" :id="`item-${index}`" :style="`background-image: url(${item.img})`"></div>
            <h3>{{item.name}}</h3>
        </div>
    </div>

  </div>
</template>

<script>
import products from "@/assets/products.json";
export default {
  name: "Products",
  data() {
    return {
        products: null
    };
  },
    methods:{
        // selectProduct(id){
        //     const cate = this.$route.params.category
        //     this.$route.push('Products/' + cate + id)
        // },
        test(e){
            const cate = this.$route.params.category
            this.$router.push(cate + '/' + e.target.id)
        }
    },
  created() {
      const cate = this.$route.params.category;
      switch (cate) {
        case "Room":
          this.products = products.Room;
          break;
        case "Lobby":
          this.products = products.Lobby;
          break;
        case "BathRoom":
          this.products = products.BathRoom;
          break;
        case "Kitchen":
          this.products = products.Kitchen;
          break;
      }
  },
};
</script>

<style scoped lang="scss">
.product-item{
    display: inline-block;
    margin: 20px;
    box-shadow: 1px 1px 10px 3px black;
    
    > .product-image{
        cursor: pointer;
        width: 300px;
        height: 300px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
}
</style>