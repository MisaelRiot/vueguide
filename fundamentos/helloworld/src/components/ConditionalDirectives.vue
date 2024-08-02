<template>
    <h1 v-if="age >= 18">Eres mayor de edad</h1>
    <h1 v-else>Eres menor de edad</h1>
    <h2 v-show="age >= 18">Estas en edad de madurar</h2>
    <h2 v-show="age < 18">Todavia eres un infante</h2>
</template>

<script setup>
// usar v-show para cambios constantes.
let age = 17;
</script>