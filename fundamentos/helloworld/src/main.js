// generamos nuestras directivas personalizadas aqui
// para que esten disponibles para todos nuestros componentes
// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// creamos nuestra app
const app = createApp(App)

// creamos las directivas antes de crear la aplicacion
// el objetivo de las directivas es modificar el dom.
// Recibe nombre y un objeto con los comportamientos de la directiva
app.directive('font-size', {
    //momentos del ciclo de vida
    beforeMount: (el, binding) => {
        // el es el elemento (nodo) sobre el cual esta actuando la directiva
        // binding los datos o valores que nos van a determinar el comportamiento
        // como los argumentos v-bind:binding
        el.style.fontSize = "70px"
    }
})

app.directive('custom-size', {
    beforeMount: (el,binding) => {
        el.style.fontSize = binding.value + "px"
    }
})

app.directive('custom-directive-args', {
    beforeMount: (el, binding) => {
        let size = 18
        switch(binding.arg){
            case 'sm':
                size = 10
                break
            case 'md':
                size = 18
                break
            case 'lg':
                size = 25
                break
            case 'xl':
                size = 40
                break
            case 'xxl':
                size = 72
        }
        el.style.fontSize = `${size}px`
    }
})
app.mount('#app')
