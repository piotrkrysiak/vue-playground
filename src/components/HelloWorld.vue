<script setup lang="ts">
defineProps<{
  msg: number
}>()
</script>

<template>
  <div class="greetings">
    <h1>{{ msg + 7 }}</h1>
  </div>
</template>
