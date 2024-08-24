import PostDetailPage from '@/pages/PostDetailPage.vue'
import PostListPage from '@/pages/PostListPage.vue'
import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        redirect: {name:'PostList'}
    },
    {
        path: '/post',
        name: 'PostList',
        component: PostListPage
    },
    {
        path: '/post/:id',
        name: 'PostDetail',
        component: PostDetailPage
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router