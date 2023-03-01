<script lang="ts">
export default {
  name: 'PokemonCard',
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      default: 'Pokemon'
    },
    url: {
      type: String,
      default: 'https://via.placeholder.com/150'
    }
  }
}
</script>
<template>
  <div
    class="aspect-square p-10 rounded-2xl bg-slate-400 shadow-2xl hover:shadow-sm hover:bg-slate-400/80"
  >
    <h1>{{ name }}</h1>
    <img :src="url" alt="pokemon" />
  </div>
</template>

<style lang=""></style>
