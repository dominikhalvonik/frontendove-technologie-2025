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
      celkovaCenaKosika: 0,
      cislo: 1,
      meno: "Dominik",
      priezvisko: "Martikan",
      parentMessage: "Toto je sprava od nadradeneho komponentu",
      childMessage: 'Nic'
    }
  },
  watch: {
    celkovaCenaKosika(newVal, oldVal) {
      if(newVal > 10) {
        alert("Ziskavas zlavu 5% na tento nakup!!!");
      }
    }
  },
  methods: {
    increment() {
      this.cislo++
    },
    decrement() {
      this.cislo--
    },
    pridajDoKOsika() {
      this.celkovaCenaKosika += 2;
    },
    handleChildEvent(message: any) {
      this.childMessage = message;
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
    <p v-if="cislo < 5"><NewComponent :parentMessage="parentMessage" @childEvent="handleChildEvent"/></p>
    <p>Správa od podriadeneho komponentu: {{ childMessage }}</p>
    <p>Ahoj toto je moj prvy komponent</p>
    <p>{{ meno }} {{ priezvisko }}</p>
    <p>{{ cislo }}</p>
    <p>{{ getMyName }}</p>
    <p :class="getColor">{{ getMyName }}</p>
    <button @click="increment">Pridaj</button>
    <button @click="decrement">Uber</button>
    <button @click="pridajDoKOsika">Pridaj do kosika</button>
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
