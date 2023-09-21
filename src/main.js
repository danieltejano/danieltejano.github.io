import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Components
import { Icon } from '@iconify/vue';


function init(){
    const app = createApp(App)
    app.component('Icon', Icon)
    app.mount('#app')
}

init()