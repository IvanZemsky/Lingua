<script setup lang="ts">
import {
  type Unit,
  type UnitWithProgress,
  useGetUnitsBySectionNumberQuery,
} from "@/entities/language"
import { useRoute } from "vue-router"
import { UnitsList, useScrollToUnit } from "@/features/language"
import { useCourseProgressStore } from "@/features/language/progress"

const route = useRoute()
const sectionNumber = parseInt(route.params.sectionNumber as string)

const courseProgressStore = useCourseProgressStore()

const { data, isFetching, error } = useGetUnitsBySectionNumberQuery<
  Unit,
  UnitWithProgress
>(sectionNumber, {
  afterFetch({ data }) {
    if (data) {
      return {
        data: courseProgressStore.convertUnitToUnitWithProgress(data),
      }
    }
    return { data }
  },
})

const { listRef } = useScrollToUnit(data, courseProgressStore.progress.lesson.unit)
</script>

<template>
  <div class="relative">
    <UnitsList
      ref="listRef"
      :sectionNumber="sectionNumber"
      :data="data"
      :is-fetching="isFetching"
      :error="error"
    />
  </div>
</template>
