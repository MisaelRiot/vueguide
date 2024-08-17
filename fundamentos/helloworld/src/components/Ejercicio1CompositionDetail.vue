<script setup>

const props = defineProps({
    name: String,
    price: Number,
    position: Number
})
const emits = defineEmits(['addingP'])
const sendProduct = () => {
    emits('addingP', props.position)
}

</script>

<template>
    <div class="detail">
        <h3>{{ props.name}}</h3>
        <p><span>$</span>{{ props.price }}</p>
        <button @click="sendProduct">Add</button>
    </div>
</template>

<style scoped>
.detail{
    margin: 0 auto;
    padding: 10px;
    border: 2px dotted black;
    border-radius: 25px;
    width: 160px;
}
.detail span{
    font-weight: bold;
}
</style>