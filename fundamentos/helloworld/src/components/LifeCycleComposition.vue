<script setup>
// utilizamos hooks
// los hooks son funciones que utilizan callbacks que se ejecuta cuando
// son llamados.
import { onMounted, onUpdated } from 'vue'
// se usan cuando queremos usar servicios o applicaciones mas complejas.
onMounted(() => {
    console.log('mounted!!')
})

onUpdated(() => {
    console.log("updated!!")
})

</script>

<template>
    <h1>Ciclo de vida con Composition</h1>
</template>

<style scoped></style>