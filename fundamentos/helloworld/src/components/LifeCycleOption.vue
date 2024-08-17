<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'LifeCycleOption',
    data() {
        return {}
    },
    methods: {

    },
    created() {
        // opciones cuando el elemento es creado
        console.log("Created!!")
    },
    mounted() {
        // opciones cuando el elemento es montado
        console.log("Mounted!!")
    },
    updated() {
        // opciones cuando el elemento es actualizado
        console.log("Updated!!")
    },
    unmounted() {
        console.log("Destroyed!!")
    },
})
</script>

<template>
    <h2>Ciclo de Vida de un componente</h2>
</template>

<style scoped></style>