<template>
    <h2>Composition for v-on (@) with setup</h2>
    <p v-bind:style="{
        backgroundColor: '#ccc',
        color: c
    }">El mensaje se ha enviado satisfactoriamente</p>
    <button v-on:click="handleClick()">Cambiar color</button>
    <button @click="handleClick()">Cambiar color con @click</button>
</template>

<script setup>
import { ref } from 'vue';
let c = ref("#fff")
const handleClick = () =>{
    c.value = "#ff0000";
}
</script>

<style scoped></style>