<script lang="ts" setup>
import { Volume2Icon } from "lucide-vue-next"

defineEmits<{
  (e: "play-audio"): void
}>()
</script>

<template>
  <button
    @click="$emit('play-audio')"
    class="flex items-center gap-2 py-4 px-6 border-2 border-gray-200 rounded-full"
  >
    <Volume2Icon class="w-7 h-7" />
    <div class="flex items-center gap-1 h-full">
      <div class="w-[3px] h-3 bg-gray-400 rounded-full"></div>
      <div class="w-[3px] h-7 bg-gray-400 rounded-full"></div>
      <div class="w-[3px] h-5 bg-gray-400 rounded-full"></div>
      <div class="w-[3px] h-2 bg-gray-400 rounded-full"></div>
      <div class="w-[3px] h-7 bg-gray-400 rounded-full"></div>
      <div class="w-[3px] h-5 bg-gray-400 rounded-full"></div>
      <div class="w-[3px] h-7 bg-gray-400 rounded-full"></div>
      <div class="w-[3px] h-5 bg-gray-400 rounded-full"></div>
    </div>
  </button>
</template>
