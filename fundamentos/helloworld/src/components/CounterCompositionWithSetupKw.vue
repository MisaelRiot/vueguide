<template>
    <h2>{{ counter }}</h2>
    <button @click="addCounter">Incrementar</button>
</template>

<script setup>
    // al usar el atributo setup, no tenemos que retornar
    // variables ni utilizar define component ya que esto
    // se realiza automaticamente.
    import { ref } from 'vue';
    let counter = ref(0);
    const addCounter = () => {
        counter.value++
    }
</script>