<script setup>
// antes era necesario importar lo de abajo
// import { defineProps, defineEmits, ref } from 'vue';
const props = defineProps({
    title: String,
    content: {
        type: String,
        required: false,
        default: "Este elemento no tiene contenido"
    }
})

const emits = defineEmits(['pshowAler'])

const handleClick = () =>{
    emits('pshowAler', `Hola desde componente ${props.title}`)
}
</script>

<template>
    <div class="contained">
        <h3>
            {{ props.title }}
        </h3>
        <p>{{ props.content }}</p>
        <button @click="handleClick">Show alert</button>
    </div>
</template>

<style scoped>
.contained {
    width: 300px;
    height: 100px;
    margin: 10px;
    padding: 10px;
    background-color: antiquewhite;
    border-radius: 10px
}
</style>