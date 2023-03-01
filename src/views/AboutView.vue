<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import PokemonCard from '@/components/PokemonCard.vue'

interface Pokemon {
  id: number
  name: string
  image: string
}

const pokemonList = ref<Pokemon[]>([])
const error = ref<string | null>(null)

const getPokemon = async () => {
  try {
    const res = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json')
    pokemonList.value = await res.json()
  } catch (err) {
    let errorMessage = 'Failed to do something exceptional'
    if (err instanceof Error) {
      errorMessage = err.message
    }
    error.value = errorMessage
  }
}

const pokemonList21 = computed(() => {
  return pokemonList.value.slice(0, 21)
})

onMounted(() => {
  getPokemon()
})
</script>

<template>
  <div class="about">
    <h1 class="bg-red">This is an about page</h1>
    <div
      v-if="pokemonList21.length > 0 && !error"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 md:px-10 2xl:px-0 gap-4 max-w-7xl mx-auto"
    >
      <PokemonCard
        v-for="pokemon in pokemonList21"
        :key="pokemon.id"
        :id="pokemon.id"
        :name="pokemon.name"
        :url="pokemon.image"
      />
    </div>
    <div v-else-if="error">
      <h1>{{ error }}</h1>
    </div>
    <div v-else>
      <h1>Loading...</h1>
    </div>
  </div>
</template>
