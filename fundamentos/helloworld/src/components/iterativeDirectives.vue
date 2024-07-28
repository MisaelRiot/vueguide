<template>
    <ul>
        <li v-for="country in countries" v-bind::key="country">{{ country }}</li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';
let countries = ref(
    ['Colombia', 'Argentina', 'Brasil', 'Mexico']
)
</script>