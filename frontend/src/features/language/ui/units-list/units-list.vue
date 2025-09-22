<script setup lang="ts">
import type { Unit } from "@/entities/language"
import LessonBtn from "./lesson-btn.vue"
import { RouterLink } from "vue-router"
import UnitDescCard from "./unit-desc-card.vue"
import { useUnitDescCard } from "./use-unit-desc-card"

type Props = {
  sectionNumber: number
  data: Unit[]
}

const { data } = defineProps<Props>()

const { targetRef, desc } =
  useUnitDescCard(
    {
      unitTitle: data[0].title,
      unitNumber: data[0].number,
    },
    data,
  )

</script>

<template>
  <div class="flex flex-col items-center gap-8">
    <UnitDescCard
      :title="`Section ${sectionNumber}, Unit ${desc.unitNumber}`"
      :subtitle="desc.unitTitle"
      class="fixed top-5 left-4 right-4"
    />

    <div
      class="w-full"
      v-for="(unit, i) in data"
      :key="unit.number"
      :data-unit="unit.number"
      ref="targetRef"
    >
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
          :to="`/sections/${unit.sectionNumber}/lessons/${lesson.number}/variants/${lesson.currentVariant}`"
          :key="lesson.number"
        />
      </div>
    </div>
  </div>
</template>
