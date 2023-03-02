<script setup lang="ts">
import { onMounted, ref, computed, onUpdated, watchEffect, watch } from 'vue'
import PokemonCard from '@/components/PokemonCard.vue'

interface Pokemon {
  id: number
  name: string
  image: string
}

const pokemonList = ref<Pokemon[]>([])
const pokemonListActive = ref<Pokemon[]>([])
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

onMounted(() => {
  getPokemon()
})

watch(
  () => pokemonList.value,
  () => {
    pokemonListActive.value = pokemonList.value.slice(0, 20)
  }
)

const loadMore = () => {
  pokemonListActive.value = pokemonList.value.slice(0, pokemonListActive.value.length + 20)
}
</script>

<template>
  <div class="about">
    <div></div>
    <h1 class="text-white text-2xl lg:text-5xl container">Pokemon Grid Page</h1>
    <div v-if="pokemonListActive.length > 0 && !error" class="container">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-6 lg:py-8">
        <PokemonCard
          v-for="pokemon in pokemonListActive"
          :key="pokemon.id"
          :id="pokemon.id"
          :name="pokemon.name"
          :url="pokemon.image"
        />
      </div>
      <div class="flex justify-center pb-6 lg:pb-8">
        <button
          class="bg-white text-black px-4 py-2 rounded-md shadow-md hover:shadow-sm transform transition-all duration-300 ease-in-out hover:bg-white/80"
          @click="loadMore"
        >
          Load More
        </button>
      </div>
    </div>
    <div v-else-if="error">
      <h1>{{ error }}</h1>
    </div>
    <div v-else>
      <h1>Loading...</h1>
    </div>
  </div>
</template>
