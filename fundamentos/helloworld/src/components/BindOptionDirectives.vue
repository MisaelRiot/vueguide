<template>
    <p v-bind:class="{ 'danger': hasError }">El mensaje se ha enviado satisfactoriamente</p>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'BindOptionDirectives',
    data(){
        return {
            hasError: true
        }
    }
});
</script>

<style scoped>
.danger {
    color: red;
}
</style>