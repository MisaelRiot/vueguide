import { createStore } from "vuex";

export default createStore({
    // datos que van a estar en el store, es como el data
    // en el option api. Almacen de variables
    state:{
        counter: 1
    },
    // los metodos que nos permiten obtener la info de un estado
    // es decir de los elementos que estan en el state. es similar al computed.
    getters:{
        doubleCounter(state){
            return state.counter * 2
        }
    },
    // son los metodos que nos permiten modificar los estados
    // de forma sincrona.
    mutations:{
        setCounter(state, value){
            state.counter = value;
        }
    }
})