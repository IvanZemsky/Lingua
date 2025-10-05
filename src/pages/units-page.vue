<script setup lang="ts">
import {
  type Unit,
  type UnitWithProgress,
  useGetUnitsBySectionNumberQuery,
} from "@/entities/language"
import { useRoute } from "vue-router"
import {
  UnitsList,
  useCourseProgressStore,
  ResetProgressBtn,
  ScrollToLessonBtn,
  convertUnitToUnitWithProgress,
} from "@/features/language"

const route = useRoute()
const sectionNumber = parseInt(route.params.sectionNumber as string)

const courseProgressStore = useCourseProgressStore()

const { data, isFetching, error } = useGetUnitsBySectionNumberQuery<
  Unit,
  UnitWithProgress
>(sectionNumber, {
  afterFetch({ data }) {
    if (data) {
      courseProgressStore.units = data
      return {
        data: convertUnitToUnitWithProgress(data, courseProgressStore.progress),
      }
    }
    return { data }
  },
})
</script>

<template>
  <div class="relative">
    <div
      class="fixed flex justify-center w-full py-2 top-0 left-0 right-0 bg-white z-40"
    >
      <ResetProgressBtn />
    </div>
    <UnitsList
      :sectionNumber="sectionNumber"
      :data="data"
      :is-fetching="isFetching"
      :error="error"
    >
      <template #scroll-to-lesson-btn>
        <ScrollToLessonBtn
          :currentLesson="courseProgressStore.progress.lesson"
        />
      </template>
    </UnitsList>
  </div>
</template>
