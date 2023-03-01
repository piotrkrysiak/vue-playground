<script setup lang="ts">
defineProps<{
  id: number
  name: string
  url: string
}>()
</script>

<template>
  <RouterLink :to="`/pokemon/${id}`">
    <div
      class="aspect-square p-6 md:p-8 lg:p-10 rounded-2xl bg-white shadow-2xl hover:shadow-sm hover:scale-[1.015] transform transition-all duration-300 ease-in-out hover:bg-white"
    >
      <h3 class="text-black text-center font-bold text-xl lg:text-3xl pb-6">{{ name }}</h3>
      <img
        class="aspect-square w-full object-contain"
        :src="`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${url}`"
        alt="pokemon"
      />
    </div>
  </RouterLink>
</template>
