<template>
  <div class="detail">
    <img :src="products.img" alt="">

    <div class="item-info">
      <h1>{{id}}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, soluta fugiat repudiandae est aliquam id voluptatibus necessitatibus ea quos laudantium quaerat facilis tempore aperiam dicta vero saepe incidunt. Molestiae, sapiente.</p>
      
      <h2>${{products.price}}</h2>
      <QuantityInput :price="products.price" />
      <div class="btn-wrapper">
        <div class="add-cart-btn" @click="addCart">加入購物車</div>
        <div class="buy-now-btn" @click="buyNow">立即購買</div>
      </div>
    </div>

    
  </div>
</template>

<script>
import products from "@/assets/products.json";
import QuantityInput from '@/components/QuantityInput.vue'
export default {
  name: "Detail",
  props:['category', 'id'],
  components:{QuantityInput},
  data(){
    return{
      products: products[this.category][this.id]
    }
  },
  methods:{
    addCart(){

    },

    buyNow(){

    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/varables.scss";

@mixin btn($color){
  cursor: pointer;
  color: $prime-dark;
  background-color: $color;
  padding: 10px;
}


.detail{
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img{
    width: 100%;
    max-width: 400px;
    height: auto;
  }
  
  .item-info{
    color: lightgrey;
    margin: 10px;
    width: 300px;
    text-align: left;
  }
}



.btn-wrapper{
  display: flex;
  gap: 10px;


  .add-cart-btn{
    @include btn($color:lightskyblue)
  }
  .buy-now-btn{
    @include btn($color:lightsalmon)
  }
}
</style>