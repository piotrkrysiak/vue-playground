<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import PokemonCard from '@/components/PokemonCard.vue'

interface Pokemon {
  name: string
  url: string
}

const pokemonList = ref<Pokemon[]>([])

const getPokemon = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await res.json()
  console.log(data)
  pokemonList.value = data.results
}

//const jsonStringify = computed(() => JSON.stringify(pokemonList.value, null, 2))

onMounted(() => {
  getPokemon()
})
</script>

<template>
  <div class="about">
    <h1 class="bg-red">This is an about page</h1>
    <div class="grid grid-cols-3 gap-4">
      <PokemonCard
        v-for="pokemon in pokemonList"
        :key="pokemon.name"
        :pokemonName="pokemon.name"
        :pokemonUrl="pokemon.url"
      />
    </div>
  </div>
</template>
