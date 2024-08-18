<script setup>
import { computed, ref } from 'vue';
import Ejercicio1CompositionDetail from './Ejercicio1CompositionDetail.vue';
/**
 * Aplicar lo aprendido hasta ahora para crear un formulario de factura
 * 1. Debe tener el valor del impuesto computado.
 * 2. Debe utilizar v-model para el biding de los elementos
 * 3. Debe utilizar comunicacion vertical descendente para que se muestren un componentes
 *    con los productos agregados a la factura
 * 4. Debe utilizar comunicacion vertical ascendente para cuando se borren elementos de 
 *    la factura y calcular los totales.
 * 6. Debe utilizar directivas iterativas para renderizar los productos que se van 
 *    agregando a la factura.
 */

let products = [
    { name: "Apple", price: 2000 },
    { name: "Pear", price: 2000 },
    { name: "Orange", price: 2000 },
    { name: "Mango", price: 2000 }
]

let ivaByCountry = [
    { name: "Colombia", percentage: .19 },
    { name: "Corea del Sur", percentage: .1 },
    { name: "Filipinas", percentage: .12 },
    { name: "Nueva Zelanda", percentage: .15 }
]

let addedProducts = ref([])

let selectedCountry = ref(0.19)

let total = computed(
    () => addedProducts.value.reduce(
        (acc, cv) => acc + cv.price, 0
    )
)
let total_tax = computed(
    () => addedProducts.value.reduce(
        (acc, cv) => acc + cv.price*selectedCountry.value, 0
    )
)
// let total_tax = total * selectedCountry.value

//add a product to invoice
const addProduct = (productIndex) => {
    addedProducts.value.push(products[productIndex])
}

</script>

<template>
    <h2 v-font-size >Ejercicio 1: simulacion de factura</h2>
    <select v-model="selectedCountry">
        <option
            v-for="(country, index) in ivaByCountry"
            :key="index"
            :value="country.percentage"
        >{{ country.name }}</option>
    </select>
    <p></p>
    <div class="detail-group">
        <Ejercicio1CompositionDetail
            v-for="(detail, index) in products"
            :key="index"
            :position="index"
            :name="detail.name"
            :price="detail.price"
            @addingP="addProduct"
        />
    </div>
    <div>
        <h3 v-custom-size="100">SubTotal:</h3>
        <p>{{ total }}</p>
        <h3>Impuestos:</h3>
        <p>{{ total_tax }}</p>
        <h3>Productos comprados:</h3>
        <ul>
            <li v-for="(item, index) in addedProducts" :key="index">{{ item.name }} - {{ item.price }}</li>
        </ul>
    </div>
</template>

<style scoped>
.detail-group {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
}
</style>