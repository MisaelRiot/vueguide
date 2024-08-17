<script setup>
// import { defineComponent, ref, computed } from 'vue';
import { ref, computed } from 'vue';

// export default defineComponent({
//     name: 'ComputedComposition',
//     setup() {
//         let message = ref('')
//         const invertedMessage = computed(() => {
//             return message.value.split('').reverse().join('')
//         })
//         return {message, invertedMessage}
//     }
// })
let message = ref('')
const invertedMessage = computed(() => {
    return message.value.split('').reverse().join('')
})
</script>

<template>
    <div>
        <h2>Computed values/data with composition</h2>
        <input type="text" v-model="message" />
        <p>{{ invertedMessage }}</p>
    </div>
</template>

<style scoped>

</style>