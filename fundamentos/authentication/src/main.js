// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"

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

app.mount('#app')
