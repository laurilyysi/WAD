import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
function toggle() {
    document.getElementById("myDropdown").classList.toggle("show");
  }