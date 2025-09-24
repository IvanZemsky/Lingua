<script setup lang="ts">
const { title } = defineProps<{ title: string }>()
</script>

<template>
  <h2 class="w-full flex items-center gap-2 mb-8">
    <div class="h-0.5 flex-grow bg-gray-200"></div>
    <span class="font-bold text-gray-400 text-xl">{{ title }}</span>
    <div class="h-0.5 flex-grow bg-gray-200"></div>
  </h2>
</template>
