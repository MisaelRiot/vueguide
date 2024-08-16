<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import LifeCycleComposition from './components/LifeCycleComposition.vue';
import LifeCycleOption from './components/LifeCycleOption.vue'
import ModelForm from './components/ModelForm.vue';
import OnOptionDirectives from './components/OnOptionDirectives.vue';
import OnCompositionDirectives from './components/OnCompositionDirectives.vue';
import BindOptionDirectives from './components/BindOptionDirectives.vue';
import BindCompositionDirectives from './components/BindCompositionDirectives.vue';
import iterativeDirectives from './components/iterativeDirectives.vue';
import PostContainer from './components/PostContainer.vue';
import CounterOption from './components/CounterOption.vue';
import CounterComposition from './components/CounterComposition.vue';
import CounterCompositionWithSetupKw from './components/CounterCompositionWithSetupKw.vue';
import ConditionalDirectives from './components/ConditionalDirectives.vue';
import VerticalComunicationL1 from './components/VerticalComunicationL1.vue';
</script>

<template>
  <VerticalComunicationL1 />
  <LifeCycleComposition />
  <LifeCycleOption />
  <ModelForm />
  <OnOptionDirectives />
  <OnCompositionDirectives />
  <BindCompositionDirectives />
  <BindOptionDirectives />
  <iterativeDirectives />
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
