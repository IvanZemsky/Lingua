<script setup lang="ts">
import { useGetVariantByNumberInLessonQuery } from "@/entities/language"
import { TASK_TYPES_UI, TaskLayout, VariantHeader, useSpeechStore } from "@/features/language"
import { UiButton } from "@/shared/ui"
import { computed, ref } from "vue"
import { useGetPageParams } from "./use-get-page-params"

const params = useGetPageParams()

const { data, isFetching, error } = useGetVariantByNumberInLessonQuery(params)
const speechStore = useSpeechStore()

const currentTaskNumber = ref(1)

const answer = ref<string>("")

const currentTask = computed(() =>
  data.value?.tasks.find((t) => t.number === currentTaskNumber.value),
)

function checkAnswer() {
  if (!currentTask.value) return

  const isCorrect = currentTask.value.results.includes(
    answer.value.trim().toLowerCase(),
  )

  if (isCorrect) {
    // show that correct
    currentTaskNumber.value++
  } else {
    // show that incorrect
    // alert("Incorrect answer, try again.")
    currentTaskNumber.value++
  }
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
      v-model:answer="answer"
      @play-audio="speechStore.speak"
    />

    <template #footer>
      <UiButton
        size="lg"
        class="text-xl h-14 font-semibold"
        @click="checkAnswer"
      >
        Check
      </UiButton>
    </template>
  </TaskLayout>
</template>
