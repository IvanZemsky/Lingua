<script lang="ts" setup>
import { Volume2Icon } from "lucide-vue-next"

defineEmits<{
  (e: "play-audio"): void
}>()
const heights = [3, 7, 5, 2, 7, 5, 7, 5, 3, 4, 7, 5, 7, 5]
</script>

<template>
  <button
    @click="$emit('play-audio')"
    class="flex items-center gap-2 py-4 px-6 border-2 border-gray-200 rounded-full"
  >
    <Volume2Icon class="w-7 h-7" />
    <div class="flex items-center gap-1 h-full">
      <div
        v-for="(height, i) in heights"
        :key="i"
        :class="`w-[3px] h-${height} bg-gray-400 rounded-full`"
      ></div>
    </div>
  </button>
</template>
