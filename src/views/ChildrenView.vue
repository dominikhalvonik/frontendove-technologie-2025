<template>
  <div>
    <h3>Vnorerná cesta</h3>
    <div v-if="id == 1">
      <h3>1 je prvočíslo</h3>
    </div>
    <div v-else-if= "id == 2">
      <h3>2 je párne číslo</h3>
    </div>
    <div v-else>
      <h3>3 je nepárne číslo</h3>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    id: {type : String, required:true,},
  },
  data() {
    return {
    }
  },

}
</script>
