<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <a class="navbar-brand" href="#">AuthApp</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/auth">Authentication</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/firebase">Firebase</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/social">Social</RouterLink>
            </li>
          </ul>
        </div>
      </nav>


      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/auth">Authentication</RouterLink>
      </nav> -->
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
