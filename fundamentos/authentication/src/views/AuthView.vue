<script setup>
import BackendAuthService from '@/services/BackendAuthService'
import { ref } from 'vue';

let email = ref('')
let password = ref('')

const loginUser = async () =>{
    const authTraditionalBackendService = new BackendAuthService()
    const success = await authTraditionalBackendService.login(
        email.value, password.value
    )
    let loginMessage = 'Login Error :('
    if(success){
        loginMessage = 'Login Success :)'
    }
    alert(loginMessage)
}
</script>

<template>
    <div class="container col">
        <form>
            <div class="form-group mt-2">
                <label for="exampleInputEmail1">Email address</label>
                <input 
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    v-model="email"
                >
            </div>
            <div class="form-group mt-2">
                <label for="exampleInputPassword1">Password</label>
                <input 
                    type="password" 
                    class="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Password"
                    v-model="password"
                >
            </div>

            <button type="submit" class="btn btn-primary mt-2" @click.prevent="loginUser">Submit</button>
        </form>
    </div>
</template>

<style scoped>

</style>