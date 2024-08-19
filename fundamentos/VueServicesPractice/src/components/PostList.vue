<script>
    import { defineComponent, onMounted } from 'vue';
    import PostService from '@/services/PostService';
    
    export default defineComponent({
        name: "PostList",
        setup(){
            // utilizamos el ciclo de vida del componente para llamar
            // a nuestros servicios.
            const service = new PostService()
            const posts = service.getPosts()
            onMounted(async () =>{
                await service.fetchAll()
            })
            return {posts}
        }
    })
</script>

<template>
    <div>
        <h1>Listado de post</h1>
        <p>Este componente es escrito con composition sin setup</p>
        <ul class="post-list">
            <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
        </ul>
    </div>
</template>

<style scoped>

</style>