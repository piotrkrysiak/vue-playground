<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{
  msg: string
}>()

const count = ref({ number: 0 })

const increment = () => {
  count.value.number++
}

const decrement = () => {
  count.value.number--
}

const positive = computed(() => count.value.number > 0)
</script>
<template>
  <div :class="{ active: positive || count.number === 0 }">
    <h1>{{ msg }}</h1>
    <div class="flex gap-2 items-center">
      <button
        class="py-2 px-4 bg-white hover:bg-white/80 cursor-pointer text-black rounded-md"
        @click="decrement"
      >
        -
      </button>
      <span class="min-w-[2rem] text-center">{{ count.number }}</span>
      <button
        class="py-2 px-4 bg-white hover:bg-white/80 cursor-pointer text-black rounded-md"
        @click="increment"
      >
        +
      </button>
    </div>
  </div>
</template>

<style scoped>
.active {
  background-color: blueviolet;
}
</style>
