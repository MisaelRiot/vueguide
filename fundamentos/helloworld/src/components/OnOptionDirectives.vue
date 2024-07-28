<template>
    <h2>Options for v-on(@)</h2>
    <p v-bind:style="{
        backgroundColor: '#ccc',
        color: c
    }">El mensaje se ha enviado satisfactoriamente</p>
    <button v-on:click="handleClick()">Cambiar color</button>
    <button @click="handleClick()">Cambiar color con @click</button>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'OnOptionDirectives',
    data(){
        return {c:"#fff"};
    },
    methods:{
        handleClick(){
            this.c = "#ff0000"; 
        }
    }
})
</script>

<style scoped></style>