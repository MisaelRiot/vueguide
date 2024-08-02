<template>
<p v-bind:class="{'danger': hasError}">El mensaje se ha enviado satisfactoriamente</p>
</template>

<script setup>
// import { defineComponent } from 'vue';
// export default defineComponent({
//     name: 'BindCompositionDirectives',
//     setup(){
    //         let hasError = true;
    //         return {hasError}
    //     }
    // })
let hasError = false;
</script>

<style scoped>
.danger{
    color: red;
}
</style>