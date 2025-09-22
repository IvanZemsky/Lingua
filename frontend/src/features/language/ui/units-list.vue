<script setup lang="ts">
import type { Unit } from "@/entities/language"
import LessonBtn from "./lesson-btn.vue"
import { RouterLink } from "vue-router"

type Props = {
  data: Unit[]
}

const { data } = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col items-center gap-8">
    <div class="w-full" v-for="(unit, i) in data" :key="unit.number">
      <h2 v-if="i !== 0" class="w-full flex items-center gap-2 mb-8">
        <div class="h-0.5 flex-grow bg-gray-200"></div>
        <span class="font-bold text-gray-400 text-xl">{{ unit.title }}</span>
        <div class="h-0.5 flex-grow bg-gray-200"></div>
      </h2>

      <div class="flex flex-col items-center gap-6">
        <LessonBtn
          :as="RouterLink"
          variant="unreached"
          v-for="lesson in unit.lessons"
          :to="`/sections/${unit.number}/lessons/${lesson.number}/variants/${lesson.currentVariant}`"
          :key="lesson.number"
        />
      </div>
    </div>
  </div>
</template>
