<script setup>
import VerticalComunitacionL2 from './VerticalComunitacionL2.vue';

let info = [
    { title: "Hijo 1", content: "Contenido del hijo 1" },
    { title: "Hijo 2", content: "Contenido del hijo 2" },
    { title: "Hijo 3", content: "Contenido del hijo 3" },
    { title: "Hijo 4", content: "Contenido del hijo 4" },
    { title: "Hijo 5", content: "Contenido del hijo 5" },
];

function showAlert(msg){
    alert(msg);
};

</script>

<template>
    <h1>Comunicacion vertical componente de nivel 1</h1>
    <div class="container">
        <VerticalComunitacionL2 v-for="elem in info" :key="elem.title" 
        :title="elem.title" :content="elem.content" @pshowAler="showAlert"/>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
}
</style>