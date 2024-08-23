<template>
    <div>
        <h1>Blog Section</h1> 
        <ul>
            <li><RouterLink :to="{name: 'post', params:{id:1}}">Primer Post</RouterLink></li>
            <li><RouterLink :to="{name: 'post', params:{id:2}}">Segundo Post</RouterLink></li>
            <li><RouterLink :to="{name: 'post', params:{id:3}}">Tercer Post</RouterLink></li>
        </ul>      
    </div>
</template>