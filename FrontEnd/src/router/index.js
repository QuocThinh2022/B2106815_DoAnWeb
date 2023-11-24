import {
    createWebHistory,
    createRouter
} from 'vue-router';
import NotFound from '../components/NotFound.vue';
import Home from '../views/client/Home.vue';
import Cart from '../components/client/Header/Cart.vue';

import DashBoard from '../views/admin/DashBoard.vue'
// import Login from '../components/admin/account/Login.vue';

const routes = [{
        path: '/',
        name: "home",
        component: Home,
    },
    {
        path: '/cart',
        name: "cart",
        component: Cart
    },
    {
        path: '/admin123/',
        name: 'dashboard',
        component: DashBoard,
    },
    // {
    //     path: '/admin123/login',
    //     name: 'login-admin',
    //     component: Login
    // },
    {
        path: "/:pathMatch(.*)*",
        name: 'notfound',
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes
})

// router.beforeEach((to, from, next) => {
//     // chuyển đến trang login nếu chưa được login
//     const publicPages = ['/admin123/login', '/', '/register'];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem('user');

//     if (authRequired && !loggedIn) {
//         return next({name: 'login-admin'});
//     }

//     next();
// })

export default router;