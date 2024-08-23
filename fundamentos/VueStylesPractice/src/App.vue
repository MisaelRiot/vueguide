<script setup>
import Card from 'primevue/card';
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';
import { ref } from 'vue';
let checked = ref(false);

function toggleDarkMode() {
  const element = document.querySelector('html');
  element.classList.toggle('my-app-dark');
}

</script>

<template>
  <div class="card flex justify-center">
    <ToggleSwitch v-model="checked" @click="toggleDarkMode()" />
  </div>
  <div>
    <Card>
      <template #title>Titulo de un Card</template>
      <template #content>
        <p class="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eius libero eaque in, deserunt
          accusantium dolores quisquam animi modi consequatur.</p>
          <Button label="Primary" severity="success" />
      </template>
    </Card>
  </div>
</template>

<style>
* {
  font-family: "Roboto", sans-serif;
}
</style>