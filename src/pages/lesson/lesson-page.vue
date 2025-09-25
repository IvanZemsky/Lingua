<script setup lang="ts">
import { useGetVariantByNumberInLessonQuery } from "@/entities/language"
import { TASK_TYPES_UI, TaskLayout, VariantHeader } from "@/features/language"
import { UiButton } from "@/shared/ui"
import { computed, ref } from "vue"
import { useGetPageParams } from "./use-get-page-params"

const params = useGetPageParams()

const { data, isFetching, error } = useGetVariantByNumberInLessonQuery(params)

const currentTaskNumber = ref(1)

const currentTask = computed(() =>
  data.value?.tasks.find((t) => t.number === currentTaskNumber.value),
)

function goToNext() {
  currentTaskNumber.value++
}
</script>

<template>
  <p v-if="isFetching">Loading...</p>
  <p v-if="error">An error occurred</p>

  <TaskLayout v-if="data && currentTask">
    <template #header>
      <VariantHeader
        :totalTasks="data.tasks.length"
        :currentTaskNumber="currentTaskNumber"
      />
    </template>

    <component
      :is="TASK_TYPES_UI[currentTask.type]"
      :data="currentTask"
      v-model:currentTaskNumber="currentTaskNumber"
    />

    <template #footer>
      <UiButton size="lg" class="text-xl h-14 font-semibold" @click="goToNext">
        Check
      </UiButton>
    </template>
  </TaskLayout>
</template>
