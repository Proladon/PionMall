<template>
    <div id="payment">
        <div class="payment-step">
            <span :class="{ active: step === 0 }">確認訂單與付款方式</span>
            ->
            <span :class="{ active: step === 1 }">資料填寫</span>
            ->
            <span :class="{ active: step === 2 }">付款完成</span>
        </div>

        <div class="wrapper-container">
            <div class="product-wrapper" v-if="step === 0">
                <div class="item-list">
                    <!-- <div class="item-container" v-for="n in 30" :key="n"> -->
                    <div class="item-container">
                        <img :src="product.img" alt="" />
                        <div class="item-info">
                            <p>
                                <strong>{{ product.name }}</strong>
                            </p>
                            <p>${{ product.price }}</p>
                            <p>數量: {{ total.qty }}</p>
                        </div>
                    </div>
                </div>

                <hr
                    style="width:100%; background: black; border:none; height:2px;"
                />
                <p>
                    <strong>Total: ${{ total.total }}</strong>
                </p>
                <p class="btn">與購物車內商品併購</p>
            </div>

            <div class="payment-wrapper" v-if="step === 0">
                <h1>Payway</h1>

                <div
                    class="payway"
                    @click="selectPayWay(0, 'paypal')"
                >
                    <img
                        src="https://2.bp.blogspot.com/-IsJvM3q3Ax4/WRFpaEDLqBI/AAAAAAACORg/kZwmbfXulVUMoQCPuJms5sKX4yDoL6HdQCLcB/s1600/Paypal_2014_logo.png"
                    /><span>PayPal</span>
                </div>
                <div
                    class="payway"
                    @click="selectPayWay(1, 'bank')"
                >
                    <img
                        src="https://image.flaticon.com/icons/png/512/60/60378.png"
                    /><span>銀行轉帳</span>
                </div>
                <div
                    class="payway"
                    @click="selectPayWay(2, 'store')"
                >
                    <img src="https://i.imgur.com/GqWsuCz.jpg" /><span
                        >超商取貨付款</span
                    >
                </div>
                <div
                    class="payway"
                    @click="selectPayWay(3, 'delivery')"
                >
                    <img
                        src="https://p2.bahamut.com.tw/HOME/creationCover/44/0002971644_B.JPG"
                    /><span>快遞取貨付款</span>
                </div>
                <div class="btn pay-btn" @click="getOrder">立即下訂</div>
            </div>

            <div class="order-info" v-if="step === 1">
                
                <!-- Bank -->

                <!-- delivery -->

                <input type="text" placeholder="姓名" />
                <input type="text" placeholder="電話" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="郵遞區號" />
                <input type="text" placeholder="收件地址" />
                <p style="text-align: left;">備註(選填)</p>
                <textarea cols="30" rows="10"></textarea>
                <div class="btn pay-btn" @click="step = 0">上一步</div>
                <div class="btn pay-btn" @click="step = 2">立即付款</div>
            </div>
        </div>

        <!-- {{product}} -->
        <!-- {{total}} -->
    </div>
</template>

<script>
export default {
    name: "Payment",
    props: ["product", "total"],
    data() {
        return {
            step: 0,
            payway: "",
        };
    },
    methods: {
        getOrder() {
            this.step = 1;
        },

        selectPayWay(index, way) {
            const all = document.getElementsByClassName("payway")
            all.forEach((element) => {
                element.classList.remove("selected");
            });

            all[index].classList.add("selected");
            this.payway = way;
        },
    },
};
</script>

<style scoped lang="scss">
@mixin container {
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.active {
    color: lightblue;
}



.btn {
    cursor: pointer;
    color: #2c3e50;
    background-color: lightsalmon;
    padding: 10px;
}

#payment {
    //    padding: 30px;
    //    width: 100%;
    //    height: 100;
    h1 {
        color: cadetblue;
    }

    input {
        box-sizing: border-box;
        padding: 10px;
        border-radius: 5px;
        border: none;
        height: 30px;
        margin-bottom: 5px;
    }

    textarea {
        margin-bottom: 10px;
        resize: none;
    }
}
.payment-step {
    color: gray;
    margin: 30px;
}

.wrapper-container {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
}

.product-wrapper {
    background-color: white;
    border-radius: 10px;

    .item-list {
        padding: 10px;
        max-height: 500px;
        overflow-y: auto;
    }
    @include container;
}

.item-container {
    display: flex;
    gap: 10%;
    padding: 20px;
    justify-content: center;
    align-items: center;
    border-bottom: solid 1px black;

    p {
        width: 10vh;
        word-break: break-all;
    }
}

.payment-wrapper,
.order-info {
    @include container;
}

.payway {
    cursor: pointer;
    display: flex;
    gap: 10px;
    padding: 30px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    height: 70px;
    width: 300px;

    > img {
        width: 50px;
        height: 50px;
    }
}

img {
    user-select: none;
    display: inline-block;
    width: 150px;
    height: 150px;
}

.selected{
    background-color: lightblue;
}
</style>
