<template>
  <div class="quantity-Input">
      <div class="btn sub-btn" @click="subQuantity">-</div>
      <input type="number" id="quantity-input" v-model="qty">
      <div class="btn add-btn" @click="addQuantity">+</div>
      <span>{{price*qty}}</span>
  </div>
</template>

<script>
export default {
    name:"QuantityInput",
    props:['price'],
    data(){
        return{
            qty:1,
        }
    },
    watch:{
        qty(){
            this.$emit('qtyChange', {qty:this.qty, total:this.price * this.qty})
        }
    },
    mounted(){
        this.$emit('qtyChange', {qty:this.qty, total:this.price * this.qty})
    },
    
    methods:{
        subQuantity(){
            if(this.total === 1) return
            this.qty -= 1
        },
        
        addQuantity(){
            this.qty += 1
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