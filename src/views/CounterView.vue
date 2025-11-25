<script lang="ts">
import {defineComponent} from 'vue'
import {useCounterStore} from "@/stores/counter";

export default defineComponent({
  name: "CounterView",
  data() {
    return {
      counter: useCounterStore()
    }
  },
})
</script>

<template>
  <h1>{{ counter.count }}</h1><br>
  <h1>{{ counter.doubleCount }}</h1><br>
  <button @click="counter.increment()">+</button><br>
  <button @click="counter.doubleIncement()">*2</button><br>
  <button @click="counter.$reset()">Reset</button><br>
  <h2>{{counter.idOdd}}</h2>

</template>

<style scoped>

</style>
