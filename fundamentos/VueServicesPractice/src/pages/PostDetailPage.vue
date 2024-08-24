<script setup>
import { onMounted } from 'vue';
    import PostService from '@/services/PostService';    
    import {useRoute} from 'vue-router'

    const service = new PostService()
    const post = service.getPost()
    onMounted(async () =>{
        const route = useRoute()
        await service.fetchOne(route.params.id)
    })

</script>

<template>
    <div class="text-center">
        <h1>Post Detail</h1>
        <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
                <h2 class="display-5 fw-bold">{{ post.title }}</h2>
                <p class="fs-4">{{ post.body }}</p>
                <RouterLink class="btn btn-primary btn-lg" :to="{name:'PostList'}">Check the post list!</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>