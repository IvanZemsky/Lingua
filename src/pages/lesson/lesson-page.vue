<script setup lang="ts">
import { useGetVariantByNumberInLessonQuery } from "@/entities/language"
import {
  TASK_TYPES_UI,
  TaskLayout,
  VariantHeader,
  useSpeechStore,
  LessonEndScreen,
  useVariantStore,
} from "@/features/language"
import { useGetPageParams } from "./use-get-page-params"
import LessonFooter from "./lesson-footer.vue"
import { storeToRefs } from "pinia"
import { onBeforeMount, watch } from "vue"

const params = useGetPageParams()

const store = useVariantStore()
const { task, answer, result } = storeToRefs(store)
const { data, isFetching, error, execute } = useGetVariantByNumberInLessonQuery(
  params.value,
  {
    afterFetch: ({ data }) => {
      if (data) {
        store.setData(data)
      }
      return { data }
    },
  },
)

watch(params, () => {
  execute()
})

onBeforeMount(() => {
  store.reset()
})

const speechStore = useSpeechStore()
</script>

<template>
  <p v-if="isFetching">Loading...</p>
  <p v-if="error">An error occurred</p>

  <TaskLayout v-if="data">
    <template #header>
      <VariantHeader
        :total-tasks="data.tasks.length"
        :current-task-number="task.currentTaskNumber"
      />
    </template>

    <component
      class="max-h-[500px] w-full"
      v-if="task.state === 'in-progress' && task.currentTask"
      :key="task.currentTask.number"
      v-model:answer="answer.answerValue"
      :is="TASK_TYPES_UI[task.currentTask.type]"
      :data="task.currentTask"
      @play-audio="speechStore.speak"
    />

    <LessonEndScreen v-else :result="result.result" />

    <template #footer>
      <LessonFooter :section-number="params.sectionNumber" />
    </template>
  </TaskLayout>
</template>
