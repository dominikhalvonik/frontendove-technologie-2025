import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2,
    idOdd: (state) => ((state.count % 2) === 0) ? 'Parne' : 'Neparne'
  },
  actions: {
    increment() {
      this.count++
    },
    doubleIncement() {
      this.count = this.count * 2
    }
  }
})
