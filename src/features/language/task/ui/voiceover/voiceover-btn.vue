<script lang="ts" setup>
import { Volume2Icon } from "lucide-vue-next"

defineProps<{ isPlaying: boolean }>()

defineEmits<{
  (e: "play-audio"): void
}>()
const heights = [3, 7, 5, 2, 7, 5, 7, 5, 3, 4, 7, 5, 7, 5]
</script>

<template>
  <button
    @click="$emit('play-audio')"
    class="flex items-center gap-2 py-4 px-6 border-2 border-gray-200 rounded-full hover:border-gray-300 transition-all"
  >
    <Volume2Icon class="w-7 h-7" />
    <div class="flex items-center gap-1 h-full">
      <div
        v-for="(height, i) in heights"
        :key="i"
        :class="[
          `w-[3px] shrink-0 ${isPlaying ? 'bg-blue-400' : 'bg-gray-400'} rounded-full bar`,
          { playing: isPlaying },
        ]"
        :style="{
          height: `${height * 4}px`,
        }"
      />
    </div>
  </button>
</template>

<style scoped>
@keyframes bounce {
  0%,
  100% {
    transform: scaleY(0.3);
  }
  50% {
    transform: scaleY(1);
  }
}
</style>
