<script setup lang="ts">
import type { UnitWithProgress } from "@/entities/language"
import LessonBtn from "./lesson-btn.vue"
import ListHeader from "./list-header.vue"
import { RouterLink } from "vue-router"
import UnitDescCard from "./unit-desc-card.vue"
import { useUnitDescCard } from "../model/use-unit-desc-card"
import { toRefs } from "vue"

type Props = {
  sectionNumber: number
  data: UnitWithProgress[] | null
  isFetching: boolean
  error: unknown
}

const props = defineProps<Props>()

const { data } = toRefs(props)

const { targetRef, desc } = useUnitDescCard(data)
</script>

<template>
  <div class="flex flex-col items-center gap-8">
    <p v-if="isFetching">Loading...</p>
    <p v-if="error">An error occurred</p>

    <UnitDescCard
      v-if="data && desc.unitNumber"
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
      <ListHeader v-if="i !== 0" :title="unit.title" />

      <div class="flex flex-col items-center gap-6">
        <LessonBtn
          :as="RouterLink"
          :status="lesson.status"
          v-for="lesson in unit.lessons"
          :to="`/sections/${unit.sectionNumber}/lessons/${lesson.number}/variants/${lesson.currentVariant}`"
          :key="lesson.number"
        />
      </div>
    </div>
  </div>
</template>
