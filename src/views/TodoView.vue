<script lang="ts">
import {defineComponent} from 'vue'
import {useTodoStore} from "@/stores/todo";

export default defineComponent({
  name: "TodoView",
  data() {
    return {
      todoCount: 1, // Počet TODO na načítanie
      todoStore: useTodoStore(),
    };
  },
  computed: {
    todos() {
      return this.todoStore.todos; // Načítané TODO položky
    },
    loading() {
      return this.todoStore.loading; // Indikátor načítavania
    },
    error() {
      return this.todoStore.error; // Chyba
    },
  },
  methods: {
    fetchTodos(count: number) {
      if (count > 0) {
        this.todoStore.fetchTodos(count); // Načítaj počet TODO
      } else {
        this.todoStore.error = 'Zadaj platný počet TODO položiek.';
      }
    },
  },
})
</script>

<template>
  <div>
    <div>
      <input v-model.number="todoCount" type="number" placeholder="Zadaj počet TODO" />
      <button @click="fetchTodos(todoCount)">Načítať TODO</button>
    </div>

    <div v-if="loading">Načítavam...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="todos.length">
      <h2>TODO zoznam:</h2>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <strong>ID:</strong> {{ todo.id }} |
          <strong>Názov:</strong> {{ todo.title }} |
          <strong>Stav:</strong> {{ todo.completed ? 'Dokončené' : 'Nedokončené' }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
</style>
