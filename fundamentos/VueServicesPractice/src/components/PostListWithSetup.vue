<script setup>
    import { onMounted } from 'vue';
    import PostService from '@/services/PostService';    

    const service = new PostService()
    const posts = service.getPosts()
    onMounted(async () =>{
        await service.fetchAll()
    })

</script>

<template>
    <div>
        <h1>Listado de post</h1>
        <p>Este componente es escrito con composition con setup</p>
        <ul class="post-list">
            <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
        </ul>
    </div>
</template>

<style scoped>

</style>