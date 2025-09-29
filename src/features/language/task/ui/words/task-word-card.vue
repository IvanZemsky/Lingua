<script setup lang="ts">
import type { WordImg } from "@/entities/language"

type Props = {
  word: WordImg
  isSelected?: boolean
}

defineProps<Props>()

defineEmits<{
  (e: "click", word: string): void
}>()
</script>

<template>
  <button
    :class="[
      'flex items-center justify-center p-4 border-2 rounded-xl transition-all',
      isSelected ? 'border-blue-400' : 'border-gray-200 hover:border-gray-300',
    ]"
    @click="$emit('click', word.text)"
  >
    <img :src="word.img" :alt="word.text" class="w-full h-full" />
  </button>
</template>
