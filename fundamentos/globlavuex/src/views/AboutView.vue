<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
const store = useStore()
const counter = computed(()=> store.state.counter)
const doubleCounter = computed(() => store.getters.doubleCounter)
const increment = () => store.commit('setCounter', counter.value + 1)

</script>

<template>
  <div class="about">
    <h3>Counter - Example with Composition Api</h3>
    <h3>{{ counter }} x 2 = {{ doubleCounter }}</h3>
    <button @click="increment">Increment</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
