/* eslint-disable no-unused-vars */
import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap and Bootstrap-Vue css
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
//Vue.use(BootstrapVue)

createApp(App)
    //.use(BootstrapVue)
    .use(router)
    .mount('#app')
