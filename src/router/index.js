import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Cart",
        name: "Cart",
        component: () => import("../views/Cart.vue"),
    },
    {   
        path: "/Login",
        name: "Login",
        component: () => import("../views/Login.vue"),
    },
    {
        path: "/User",
        name: "User",
        component: () => import("../views/User.vue"),
    },
    {
        path: "/Products/:category",
        name: "Products",
        component: () => import("../views/Products.vue"),
    },
    {
        path: "/Products/:category/:index",
        name: "Detail",
        props: true,
        component: () => import("../views/Detail.vue"),
    },
    {
        path: "/Payment/",
        name: "Payment",
        props: true,
        component: () => import("../views/Payment.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
