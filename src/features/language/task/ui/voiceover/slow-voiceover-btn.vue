<script setup lang="ts">
import { TurtleIcon } from "lucide-vue-next"

defineEmits<{
  (e: "play-audio"): void
}>()
</script>

<template>
  <button
    @click="$emit('play-audio')"
    class="flex items-center gap-2 py-4 px-6 border-2 border-gray-200 rounded-full hover:border-gray-300 transition-all"
  >
    <TurtleIcon class="w-7 h-7" />
  </button>
</template>
