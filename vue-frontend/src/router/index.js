import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Subscribe from '../views/Subscribe'

const routes = [
    {
        path: "/",
        name: "Login",
        component : Login
    },
    {
        path: "/subscribe",
        name: "Subscribe",
        component : Subscribe
    },
    {
        path: "/home",
        name: "Home",
        component : Home
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router