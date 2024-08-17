<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ComputedOption',
    data() {
        return {
            message: ''
        }
    },
    computed: {
        invertedMessage(){
            return this.message.split('').reverse().join('')
        }
    }
})
</script>

<template>
    <div>
        <h2>Computed values/data</h2>
        <input type="text" v-model="message" />
        <p>{{ invertedMessage }}</p>
    </div>
</template>

<style scoped>

</style>