/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Auth/Login/Login'
import Subscribe from '../components/Auth/Subscribe/Subscribe'

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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router