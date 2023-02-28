<script lang="ts">
export default {
  name: 'PokemonCard',
  props: {
    pokemonName: String,
    pokemonUrl: String
  }
}
</script>
<template>
  <div
    class="aspect-square p-10 rounded-2xl bg-slate-400 shadow-2xl hover:shadow-sm hover:bg-slate-400/80"
  >
    <h1>{{ pokemonName }}</h1>
    <img :src="pokemonUrl" alt="pokemon" />
  </div>
</template>

<style lang=""></style>
