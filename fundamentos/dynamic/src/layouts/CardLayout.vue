<script setup>
import UserCard from '@/components/UserCard.vue';
const props = defineProps(['content'])
</script>

<template>
    <h2>Card Layout</h2>
    <div class="container">
        <UserCard v-for="(item, index) in props.content" :key="index" :content="item" />
    </div>
</template>

<style scoped>
.container {
    width: 100vw;
    display: flex;
    justify-content:start;
    align-items: flex-start;
    flex-wrap: wrap;
}
</style>