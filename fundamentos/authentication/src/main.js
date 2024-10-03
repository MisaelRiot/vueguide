// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import VueCookies from 'vue-cookies'
import VueSession from 'vue-session';


const app = createApp(App)

const firebaseConfig = {
    apiKey: "AIzaSyDj_WgBQ2YUHDom6uhCrHmJLfF6-kADiO8",
    authDomain: "misaelriotdev-e48b8.firebaseapp.com",
    projectId: "misaelriotdev-e48b8",
    storageBucket: "misaelriotdev-e48b8.appspot.com",
    messagingSenderId: "765119901988",
    appId: "1:765119901988:web:7dab0a0bc263a1270803b1",
    measurementId: "G-7MZXZ3ZB4J"
};

initializeApp(firebaseConfig);

app.use(router)
app.use(VueCookies, {
    expires: '1d'
    // path:'/',
    // domain:'',
    // secure:'',
    // sameSite
})
app.use(VueSession)
app.mount('#app')
// como podemos guardar una cookie
// $cookies.set('auth', value, path, domain, secure)
// $cookies.get('auth')
// $cookies.remove('auth')
// $cookies.isKey('auth')
// $cookies.keys()

// gestion de sesiones
// $ session.start()
// $session.set('auth', value)
// $session.get('auth')
// $session.id()
// $session.renew()
// $session.destroy()