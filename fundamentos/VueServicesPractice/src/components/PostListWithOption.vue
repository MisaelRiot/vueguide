<script>
    import { defineComponent, ref } from 'vue';
    import PostService from '@/services/PostService';
    
    export default defineComponent({
        name: "PostListWithOption",
        data(){
            // utilizamos el ciclo de vida del componente para llamar
            // a nuestros servicios.
            const posts = ref([])
            return {posts}
        },
        async mounted(){
            const service = new PostService()
            this.posts = service.getPosts()
            await service.fetchAll()
            console.log(this.posts[0].title)
        }
    })
</script>

<template>
    <div>
        <h1>Listado de post</h1>
        <p>Este componente es escrito con composition con option api</p>
        <ul class="post-list">
            <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
        </ul>
    </div>
</template>

<style scoped>

</style>