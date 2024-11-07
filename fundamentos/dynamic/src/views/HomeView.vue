<script setup>
import { ref, defineAsyncComponent } from 'vue';


const users = ref([
  {
    name: "Misael",
    age: 35,
    position: "Fullstack"
  },
  {
    name: "Katherine",
    age: 35,
    position: "Bussiness Administrator"
  },
  {
    name: "Javier",
    age: 20,
    position: "Fullstack"
  },
  {
    name: "Ruben",
    age: 34,
    position: "Contador"
  },
  {
    name: "Natalia",
    age: 33,
    position: "Diseñadora"
  }
])

const ListLayout = defineAsyncComponent(() => import('@/layouts/ListLayout.vue'))
const CardLayout = defineAsyncComponent(() => import('@/layouts/CardLayout.vue'))
const TableLayout = defineAsyncComponent(() => import('@/layouts/TableLayout.vue'))
const layout = ref(ListLayout)
const search = ref('')
const handleLayout = (cmp) => {
  // podriamos poner un spinner para mientras se cambia el componente
  layout.value = cmp
}

const handleSearch = () => {
  filteredUsers.value = users.value.filter((item) => item.name.toLowerCase().includes(search.value.toLowerCase()))
}

const filteredUsers = ref([])
filteredUsers.value = users.value
</script>

<template>
  <h1>Listado de Usuarios</h1>
  <input type="text" placeholder="Filtrar Usuario" v-model="search" @keyup="handleSearch" />
  <div>
    <button @click="handleLayout(ListLayout)">Ver en lista</button>
    <button @click="handleLayout(CardLayout)">Ver en cards</button>
    <button @click="handleLayout(TableLayout)">Ver en table</button>
  </div>
  <component :is="layout" :content="filteredUsers" />
</template>
