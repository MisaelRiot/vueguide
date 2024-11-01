<script setup>
const props = defineProps(['content'])
</script>

<template>
    <div class="list">
        <h3>{{ props.content.name }}</h3>
        <p>Edad: {{ props.content.age }}</p>
        <p>{{ props.content.position }}</p>
    </div>
</template>

<style scoped>
.list {
    background-color: aquamarine;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 10px;
}
</style>