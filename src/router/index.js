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
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
    },
    {
        
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
    },
    {
        path: "/user",
        name: "User",
        component: () => import("../views/User.vue"),
    },
    {
        path: "/products/:category",
        name: "Products",
        component: () => import("../views/Products.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
