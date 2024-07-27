<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Increment</button>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'CounterComposition',
    setup(){
        let counter = ref(0); // es necesario establecer una referencia
        const addCounter = () => {
            counter.value++;
        }
        return {counter, addCounter}
    }
})
</script>