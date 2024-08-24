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
    <div class="container text-center">
        <h1 class="display-1">Listado de post</h1>
        <p class="lead">Este componente es escrito con composition con setup</p>
        <ul class="list-group">
            <li v-for="post in posts" :key="post.id" class="list-group-item" >
                <RouterLink :to="{name:'PostDetail', params:{id: post.id}}">
                    {{ post.title }}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
li{
    a{
        text-decoration: none;
        color: $primaryColor;
    }
}
li:hover{
    background-color: $primaryColor;
    color: white;
    cursor: pointer;
    a{
        color: white;
    }
}
</style>