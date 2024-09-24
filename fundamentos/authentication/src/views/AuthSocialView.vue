<script setup>
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider()
const auth = getAuth()

const loginGoogle = async () =>{
    let loginMessage = 'Nothing happened'
    signInWithPopup(auth,googleProvider)
    .then((result)=>{
        loginMessage = 'Login Success :)'    
        console.log(result)
    }).catch((error)=>{
        loginMessage = `Login Error :( ${error.message}`
        // console.log(error)
    }).finally(()=>{
        alert(loginMessage)
    })
    
}

</script>

<template>
    <div>
        <h2>Social Login</h2>
        <button @click="loginGoogle">Login with google</button>
        <button>Login with facebook</button>
        <button>Login with X</button>
        <button>Login with Github</button>
    </div>
</template>

<style scoped>

</style>