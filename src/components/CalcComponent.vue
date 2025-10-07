<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CalcComponent",
  data() {
    return {
      number1: 0,
      number2: 0,
      result: 0
    };
  },
  methods: {
    calculate(operation: string) {
      const num1 = this.number1;
      const num2 = this.number2;

      switch (operation) {
        case '+':
          this.result = num1 + num2;
          break;
        case '-':
          this.result = num1 - num2;
          break;
        case '*':
          this.result = num1 * num2;
          break;
        case '/':
          if (num2 !== 0) {
            this.result = num1 / num2;
          } else {
            this.result = 0;
          }
          break;
        default:
          this.result = 0;
      }
    },
    increment() {
      this.number2++
    }
  }
})
</script>

<template>
  <div>
    <h2>Jednoduchá kalkulačka</h2>

    <!-- Inputy na zadanie čísel -->
    <input type="number" v-model.number="number1" placeholder="Zadajte prvé číslo" />
    <input type="number" v-model.number="number2" placeholder="Zadajte druhé číslo" />

    <!-- Tlačidlá na matematické operácie -->
    <div>
      <button @click="calculate('+')">+</button>
      <button @click="calculate('-')">-</button>
      <button @click="calculate('*')">*</button>
      <button @click="calculate('/')">/</button>
      <button @click="increment">Pridaj Number 2</button>
    </div>

    <!-- Výsledok operácie -->
    <p>Výsledok: {{ result }}</p>
    <p>Cislo1: {{ number1 }}</p>
    <p>Cislo2: {{ number2 }}</p>
  </div>
</template>

<style scoped>
button {
  margin: 5px;
}
input {
  margin-right: 10px;
}
</style>
