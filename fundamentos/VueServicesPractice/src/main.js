// import './assets/main.css'
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'
// import './scss/_variables.scss'

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)
app.use(router)
app.mount('#app')
