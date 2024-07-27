<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import PostContainer from './components/PostContainer.vue';
import CounterOption from './components/CounterOption.vue';
import CounterComposition from './components/CounterComposition.vue';
import CounterCompositionWithSetupKw from './components/CounterCompositionWithSetupKw.vue';
import ConditionalDirectives from './components/ConditionalDirectives.vue';
</script>

<template>
  <ConditionalDirectives />
  <h1>Listado de Post:</h1>
  <PostContainer />
  <h2>Counter:</h2>
  <CounterOption />
  <h2>Composition Counter:</h2>
  <CounterComposition />
  <h2>Composition with setup Counter:</h2>
  <CounterCompositionWithSetupKw />
</template>

<style scoped></style>
