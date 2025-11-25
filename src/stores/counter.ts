import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: Number(localStorage.getItem('counter')) || 0
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2,
    idOdd: (state) => ((state.count % 2) === 0) ? 'Parne' : 'Neparne'
  },
  actions: {
    increment() {
      this.count++
      this.saveToLocalStorage()
    },
    decrement() {
      this.count--
      this.saveToLocalStorage()
    },
    reset() {
      this.count = 0
      this.saveToLocalStorage()
    },
    doubleIncement() {
      this.count = this.count * 2
      localStorage.setItem('counter', String(this.count))
    },
    saveToLocalStorage() {
      localStorage.setItem('counter', String(this.count))
    },
  }
})
