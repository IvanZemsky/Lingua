<script lang="ts" setup>
import { computed } from 'vue';

const { isAnswerCorrect } = defineProps<{ isAnswerCorrect: boolean }>()

const variant = computed(() =>
  isAnswerCorrect ? "bg-green-500" : "bg-red-500",
)
</script>

<template>
  <div
    :class="`absolute bottom-0 left-0 pb-18 w-full text-[20px] text-white ${variant} transition-bg z-1`"
  >
    <div class="container mx-auto p-4 h-full">
      <slot />
    </div>
  </div>
</template>
