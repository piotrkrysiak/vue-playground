<script setup lang="ts">
import type { Pokemon } from '@/ts/interfaces/pokemon'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()

const pokemon = ref<Pokemon | null>(null)

const fetchPokemon = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`)
  const data = await response.json()
  pokemon.value = data
}

onMounted(() => {
  fetchPokemon()
})
</script>

<template>
  <div class="px-5 md:px-10 2xl:px-0 gap-4 max-w-7xl mx-auto py-6 lg:py-8">
    <h1 class="text-white text-2xl lg:text-5xl">Pokemon Details Page</h1>
    <RouterLink to="/pokemon">Go Back</RouterLink>
    <div v-if="pokemon">
      <div class="home">{{ route.params.id }}</div>
      <p>Height: {{ pokemon.height }}</p>
      <p>Weight: {{ pokemon.weight }}</p>
      <p>Base Experience: {{ pokemon.base_experience }}</p>
      <h2>Abilities</h2>
      <ul>
        <li v-for="ability in pokemon.abilities" :key="ability.ability.name">
          <span> {{ ability.ability.name }} {{ ' ' }} </span>
          <span>
            {{ ability.is_hidden ? 'Hidden' : 'Not Hidden' }}
          </span>
          <span> Slot: {{ ability.slot }} </span>
        </li>
      </ul>
    </div>
    <div v-else>
      <h1>Loading...</h1>
    </div>
  </div>
</template>

<!-- pokemon detail -->
<!-- pagination  -->
