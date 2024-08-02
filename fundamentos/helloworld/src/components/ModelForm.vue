<script setup>
import { ref } from 'vue';
let inputText = ref('');
let agree = ref(true);
let defaultCountry = ref("mx");
let countries = ref([
    {code: "co", name: "Colombia"},
    {code: "es", name: "España"},
    {code: "mx", name: "México"},
    {code: "us", name: "United States"}
])
</script>
<template>
    <form>
        <input type="text" v-model="inputText" />
        <input type="checkbox" v-model="agree" /> Acepto los terminos y condiciones
        <select v-model="defaultCountry">
            <option v-for="country in countries" v-bind:key="country.code" v-bind:value="country.code">{{ country.name }}</option>
        </select>
    </form>
    <h3>{{ inputText }}</h3>
    <p v-if="agree">Se aceptaron los terminos y condiciones</p>
</template>
<style scoped></style>