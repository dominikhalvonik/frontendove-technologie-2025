<script lang="ts">
import {defineComponent} from 'vue'
import NewComponent from './NewComponent.vue'

export default defineComponent({
  name: "TestComponent",
  components: {
    NewComponent
  },
  data() {
    return {
      cislo: 1,
      meno: "Dominik",
      priezvisko: "Martikan"
    }
  },
  methods: {
    increment() {
      this.cislo++
    },
    decrement() {
      this.cislo--
    }
  },
  computed: {
    getColor() {
      if(this.cislo < 5) {
        return "green"
      } else {
        return "blue"
      }
    },
    getMyName() {
      return this.meno + " " + this.priezvisko
    }
  }
})
</script>

<template>
  <div>
    <p>Ahoj toto je moj prvy komponent</p>
    <p>{{ meno }} {{ priezvisko }}</p>
    <p>{{ cislo }}</p>
    <p>{{ getMyName }}</p>
    <p :class="getColor">{{ getMyName }}</p>
    <button @click="increment">Pridaj</button>
    <button @click="decrement">Uber</button>
    <p v-if="cislo < 5"><NewComponent/></p>
  </div>
</template>

<style scoped>
.green {
  color: green;
  font-size: 50px;
}

.blue {
  color: blue;
  font-size: 30px;
}
</style>
