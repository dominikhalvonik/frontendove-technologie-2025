<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NewComponent",
  data() {
    return {
      somTu: false,
      somTuCislo: 5,
      zoznamLudi: [
        {
          id: 1,
          meno: "Martin",
          priezvisko: "Lodnanek",
          vek: 64
        },
        {
          id: 2,
          meno: "Peter",
          priezvisko: "Marcin",
          vek: 47
        },
        {
          id: 3,
          meno: "Igor",
          priezvisko: "Ivan",
          vek: 20
        },
      ]
    }
  },
  methods: {
    toggle() {
      this.somTu = !this.somTu
    },
    increment() {
      this.somTuCislo++
    },
    decrement() {
      this.somTuCislo--
    },
    addFakePerson() {
      this.zoznamLudi.push({id: 14, meno: "Dominik", priezvisko: "Takac", vek: 18})
    },
    removePerson() {
      this.zoznamLudi.pop()
    }
  },
  beforeCreate() {
    console.log("Toto sa udeje pred vytvorenim komponentu")
  },
  created() {
    console.log("Toto sa udeje po vytvoreni komponentu")
  },
  beforeMount() {
    console.log("Toto sa udeje pred vlozenim komponentu do HTML")
  },
  mounted() {
    console.log("Toto sa udeje po vlozenim komponentu do HTML")
  },
  beforeUpdate() {
    console.log("Toto sa udeje pred aktualizaciou komponentu")
  },
  updated() {
    console.log("Toto sa udeje po aktualizaciou komponentu")
  },
  beforeUnmount() {
    console.log("Toto sa udeje pred vynatim komponentu s HTML")
  },
  unmounted() {
    console.log("Toto sa udeje po vynatim komponentu s HTML")
  },
})
</script>

<template>
  <div>
    <button @click="toggle">Toggle</button>
    <p v-if="somTu">Ahoj som tu, lebo premenna somTu je true</p>
    <p v-else>Ahoj niesom tu, lebo premenna somTu je false</p>
    <p v-show="somTu">Ahoj som tu, lebo premenna somTu je true</p>
    <br><br>
    <button @click="increment">Pridaj</button>
    <button @click="decrement">Uber</button>
    <p v-if="somTuCislo <= 5">Cislo je mensie/rovne ako 5</p>
    <p v-else-if="somTuCislo > 5 && somTuCislo < 10">Cislo je v rozmedzi 5 az 10</p>
    <p v-else>Cislo je vacsie ako 10</p>
    <br><br><br>
    <button @click="addFakePerson">Vloz cloveka</button>
    <button @click="removePerson">Vymaz cloveka</button>
    <ul>
      <li v-for="item in zoznamLudi" :key="item.id">
        Meno: {{ item.meno + item.priezvisko }}
        Vek: {{ item.vek }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
