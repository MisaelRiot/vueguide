<script setup>
import UserList from '@/components/UserList.vue';
const props = defineProps(['content'])
</script>

<template>
    <h2>Card Layout</h2>
    <div class="container">
        <UserList v-for="(item, index) in props.content" :key="index" :content="item" />
    </div>
</template>

<style scoped>
.container {
    width: 100vw;
    display: flex;
    justify-content:space-around;
    align-items: flex-start;
    flex-wrap: wrap;
}
</style>