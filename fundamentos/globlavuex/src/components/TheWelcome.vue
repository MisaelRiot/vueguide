<script>
import { defineComponent } from 'vue';
// funciones de mapeo
import { mapMutations, mapState, mapGetters } from 'vuex';

export default defineComponent({
  name: 'TheWelcome',
  computed: {
    ...mapState(['counter']),
    // counter(){
    //   // leer el counter desde el store
    //   return this.$store.state.counter
    // },
    ...mapGetters(['doubleCounter'])
    // doubleCounter(){
    //   // leer el doubleCounter del store
    //   return this.$store.getters.doubleCounter
    // }
  },
  methods: {
    ...mapMutations(['setCounter']),
    increment(){
      this.setCounter(this.counter + 1)
      // llamar a la mutacion set counter del store
      // this.$store.commit('setCounter', this.counter + 1)
    }
  }
})
</script>

<template>
  <h3>Counter</h3>
  <h3>{{ counter }} x 2 = {{ doubleCounter }}</h3>
  <button @click="increment">Increment</button>
</template>
