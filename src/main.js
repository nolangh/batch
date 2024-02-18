import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from `BootstrapVue`


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

createApp(App).mount('#app')
