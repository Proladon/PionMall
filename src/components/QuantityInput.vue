<template>
  <div class="quantity-Input">
      <div class="btn sub-btn">-</div>
      <input type="number" id="quantity-input" :ref="quantity_input" v-model="total">
      <div class="btn add-btn">+</div>

      <span>{{price*total}}</span>
  </div>
</template>

<script>
export default {
    name:"QuantityInput",
    props:['price'],
    data(){
        return{
            total:0
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
}

input{
    width: 50px;
}
</style>