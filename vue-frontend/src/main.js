import { createApp } from 'vue'
//import Vue from 'vue'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTimes, faSyncAlt, faLaptopCode, faLandmark, faStethoscope, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'
import store from './services/Store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

let icons = [
    faTimes,
    faCheck,
    faSyncAlt,
    faLaptopCode,
    faLandmark,
    faStethoscope,
    faUserCircle
]

icons.forEach(icon => library.add(icon));

createApp(App)
    .use(router)
    .use(store)
    .use(FontAwesomeIcon)
    //.use(BootstrapVue)
    .mount('#app')

