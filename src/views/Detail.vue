<template>
  <div class="detail">
    <h1>{{category}}</h1>
    <h1>{{id}}</h1>
    <img :src="products[category][id].img" alt="">

    
  </div>
</template>

<script>
import products from "@/assets/products.json";
export default {
  name: "Detail",
  props:['category', 'id'],
  data(){
    return{
      products: products
    }
  },
  methods:{

  }
};
</script>

<style scoped lang="scss">

</style>