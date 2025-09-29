<script setup lang="ts">
import { ArrowUp, ArrowDown } from "lucide-vue-next"
import { useScrollToLesson } from "../model/use-scroll-to-lesson"
import type { CourseProgressLS } from "../../model/progress-store"

const { currentLesson } = defineProps<{
  currentLesson: CourseProgressLS["lesson"]
}>()

const { buttonRef, arrowDirection, scrollToLesson } =
  useScrollToLesson(currentLesson)
</script>

<template>
  <button
    @click="scrollToLesson()"
    ref="buttonRef"
    class="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center z-50"
  >
    <component
      :is="arrowDirection === 'up' ? ArrowUp : ArrowDown"
      class="w-6 h-6"
    />
  </button>
</template>
