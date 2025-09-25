<script setup lang="ts">
import type { UnitWithProgress } from "@/entities/language"
import LessonBtn from "./lesson-btn.vue"
import ListHeader from "./list-header.vue"
import { RouterLink } from "vue-router"
import UnitDescCard from "./unit-desc-card.vue"
import { useUnitDescCard } from "../model/use-unit-desc-card"
import { ref, toRefs } from "vue"

type Props = {
  sectionNumber: number
  data: UnitWithProgress[] | null
  isFetching: boolean
  error: unknown
}

const props = defineProps<Props>()
const { data } = toRefs(props)

const root = ref<HTMLDivElement | null>(null)
defineExpose({ root })

const { targetRefs, desc } = useUnitDescCard(data)
</script>

<template>
  <div class="flex flex-col items-center gap-8" ref="root">
    <p v-if="isFetching">Loading...</p>
    <p v-if="error">An error occurred</p>

    <UnitDescCard
      v-if="data?.length && desc.unitTitle"
      :title="`Section ${sectionNumber}, Unit ${desc.unitNumber}`"
      :subtitle="desc.unitTitle"
      class="fixed top-5 left-4 right-4"
    />

    <div
      v-for="(unit, i) in data"
      :class="`w-full ${i === 0 ? 'pt-26' : ''}`"
      :key="unit.number"
      :data-unit="unit.number"
      ref="targetRefs"
    >
      <ListHeader v-if="i !== 0" :title="unit.title" />

      <div class="flex flex-col items-center gap-6">
        <LessonBtn
          :as="RouterLink"
          :status="lesson.status"
          v-for="lesson in unit.lessons"
          :to="`/sections/${unit.sectionNumber}/units/${unit.number}/lessons/${lesson.number}/variants/${lesson.currentVariant}`"
          :key="lesson.number"
        />
      </div>
    </div>
  </div>
</template>
