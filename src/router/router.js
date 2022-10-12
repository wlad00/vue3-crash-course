import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import UserPage from "@/pages/UserPage";
import About from "@/pages/About";
import PostIdPage from "@/pages/PostIdPage";
import PostPageWithStore from "@/pages/PostPageWithStore";
import Composition from "@/pages/Composition/Composition";
import Sneakers from "@/pages/Sneakers/Sneakers";
import Oop from "@/pages/Oop/Oop";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: UserPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    {
        path: '/composition',
        component: Composition
    },
    {
        path: '/sneakers',
        component: Sneakers
    },
    {
        path: '/oop',
        component: Oop
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
