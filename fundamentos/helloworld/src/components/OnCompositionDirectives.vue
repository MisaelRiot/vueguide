<template>
    <h2 ref="container" >Composition for v-on (@) with setup</h2>
    <p v-bind:style="{
        backgroundColor: '#ccc',
        color: c
    }">El mensaje se ha enviado satisfactoriamente</p>
    <button v-on:click="handleClick()">Cambiar color</button>
    <button @click="handleClick()">Cambiar color con @click</button>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const container = ref(null)
let c = ref("#fff")
const handleClick = () => {
    c.value = "#ff0000";
}
onMounted(()=>{
    gsap.from(container.value, {
        delay: 0.5,
        duration: 1,
        y: -100,
        autoAlpha: 0,
        ease: "back.out(1.7)"
    })
})

</script>

<style scoped></style>