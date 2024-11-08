import { ref } from "vue"


class PostService {
    #posts
    #post

    constructor(){
        this.#posts = ref([])
        this.#post = ref({})
    }

    getPosts () {
        return this.#posts
    }

    getPost(){
        return this.#post
    }

    async fetchAll(){
        try {
            const url = "https://jsonplaceholder.typicode.com/posts"
            const response = await fetch(url)
            const json = await response.json()
            this.#posts.value = json;
        } catch (error) {
            console.log(error)
        }
    }
    async fetchOne(id){
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`
            const response = await fetch(url)
            const json = await response.json()
            this.#post.value = json;
        } catch (error) {
            console.log(error)
        }
    }
}

export default PostService