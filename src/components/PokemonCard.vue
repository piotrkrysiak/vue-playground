<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  id: number
  name: string
  url: string
}>()

const imageUrl = computed(() => {
  return `https://jherr-pokemon.s3.us-west-1.amazonaws.com/${props.url}`
})
</script>

<template>
  <div
    class="aspect-square p-10 rounded-2xl bg-slate-400 shadow-2xl hover:shadow-sm hover:bg-slate-400/80"
  >
    <h1>{{ name }}</h1>
    <img :src="imageUrl" alt="pokemon" />
  </div>
</template>
