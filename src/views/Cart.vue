<template>
  <div id="cart">
      <h1>Cart</h1>
      <div class="cart-item-list" @click="selecItem($event)">
        <div class="cart-item" v-for="(item, index) in cart" :id="`item-${index}`" :key="item.id">
          
          <h3>{{index}}. {{getItem(item).name}}</h3>
          <span> {{getItem(item).price}}</span>
          <div class="delete-from-cart">移除</div>
        </div>
      </div>
      
  </div>
</template>

<script>
import products from "@/assets/products.json";
export default {
    name: "Cart",
    data(){
      return{
        products: products
      }
    },
    computed:{
      cart(){
        return this.$store.state.cart
      },
    },
    methods:{
      getItem(item){
        return products[item.category][item.id]
      },

      selecItem(e){
        if (e.target.className === 'delete-from-cart') {
            const itemIndex = e.target.parentElement.id.split('-')[1]
            this.$store.commit('DELETE_FROM_CART', itemIndex)
          }
      },
    }
}
</script>

<style scoped lang="scss">
.cart-item{
  color: white;
  border: solid 1px lightblue;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}


.delete-from-cart{
  cursor: pointer;
  color: hotpink;
}

</style>