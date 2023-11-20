import { createApp, VueElement } from 'vue'
import './style.css'
import App from './App.vue'



import Vue from 'vue'
import AlertVue from './components/Alert.vue'
Vue.prototype.$Alert = AlertVue

createApp(App).mount('#app')
