<template>
  <div>
    <h2>Tu som na id: {{ id }}</h2>
  </div>
  <div>
    <router-link :to="{name: 'infoChildren', params: {id: id} }">
      <p> Info </p>
    </router-link>
    <router-view>
    </router-view>
  </div>


</template>


<script lang="ts">
export default {
  props: {
    id: {type: String, required: true, },
  },
  data() {
    return {
    }
  },

}
</script>
