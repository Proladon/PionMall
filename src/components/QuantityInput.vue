<template>
  <div class="quantity-Input">
      <div class="btn sub-btn" @click="subQuantity">-</div>
      <input type="number" id="quantity-input" :ref="quantity_input" v-model="total">
      <div class="btn add-btn" @click="addQuantity">+</div>
      <span>{{price*total}}</span>
  </div>
</template>

<script>
export default {
    name:"QuantityInput",
    props:['price'],
    data(){
        return{
            total:1
        }
    },
    methods:{
        subQuantity(){
            if(this.total === 1) return
            this.total -= 1
        },
        
        addQuantity(){
            this.total += 1
        }
    }
}
</script>

<style scoped lang="scss">
.quantity-Input{
    display: flex;
    height: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.btn{
    cursor: pointer;
    width: 30px;
    text-align: center;
    color: grey;
    background: rgb(201, 201, 201);
    -webkit-user-select: none;
    -moz-user-select: none;
}

input{
    width: 50px;
}
</style>