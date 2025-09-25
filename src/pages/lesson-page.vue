<script setup lang="ts">
import { useGetVariantByNumberInLessonQuery } from "@/entities/language"
import { TASK_TYPES_UI, TaskLayout, VariantProgress } from "@/features/language"
import { UiButton } from "@/shared/ui"
import { ref, watch } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

const params = {
  sectionNumber: parseInt(route.params.sectionNumber as string),
  unitNumber: parseInt(route.params.unitNumber as string),
  lessonNumber: parseInt(route.params.lessonNumber as string),
  variantNumber: parseInt(route.params.variantNumber as string),
}

const { data, isFetching, error } = useGetVariantByNumberInLessonQuery(params)

const currentTaskNumber = ref(0)

function goToNext() {
  currentTaskNumber.value++
}
</script>

<template>
  <p v-if="isFetching">Loading...</p>
  <p v-if="error">An error occurred</p>

  <TaskLayout v-if="data">
    <template #header>
      <VariantProgress />
    </template>

    <component
      :is="TASK_TYPES_UI[data.tasks[0].type]"
      :data="data.tasks[currentTaskNumber]"
    />

    <template #footer>

      <UiButton size="lg" class="text-xl font-semibold">
        Check
      </UiButton>
    </template>
  </TaskLayout>
</template>
