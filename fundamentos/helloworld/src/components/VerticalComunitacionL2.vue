<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: "VerticalComunicationL2",
    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: false,
            default: "Este elemento no tiene contenido"
        }
    },
    emits: ["pshowAler"],
    setup(props, {emit}) {
        const handleClick = () => {
            emit('pshowAler', `Hola desde componente ${props.title}`)
        }
        return { props, handleClick }
    }

})
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