<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  msg: string
}>()

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}
</script>
<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="flex gap-2 items-center">
      <button
        class="py-2 px-4 bg-white hover:bg-white/80 cursor-pointer text-black rounded-md"
        @click="decrement"
      >
        -
      </button>
      <span class="min-w-[2rem] text-center">{{ count }}</span>
      <button
        class="py-2 px-4 bg-white hover:bg-white/80 cursor-pointer text-black rounded-md"
        @click="increment"
      >
        +
      </button>
    </div>
  </div>
</template>

<style></style>
