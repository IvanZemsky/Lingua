<script setup lang="ts">
import { useGetVariantByNumberInLessonQuery } from "@/entities/language"
import {
  TASK_TYPES_UI,
  TaskLayout,
  VariantHeader,
  TaskBtn,
  useSpeechStore,
  useAnswer,
  useTask,
} from "@/features/language"
import { useGetPageParams } from "./use-get-page-params"
import LessonFooter from "./lesson-footer.vue"
import { reactive } from "vue"

const params = useGetPageParams()

const { data, isFetching, error } = useGetVariantByNumberInLessonQuery(params)
const speechStore = useSpeechStore()

const answer = reactive(useAnswer())
const task = reactive(useTask(data, answer))
</script>

<template>
  <p v-if="isFetching">Loading...</p>
  <p v-if="error">An error occurred</p>

  <TaskLayout v-if="data && task.currentTask">
    <template #header>
      <VariantHeader
        :totalTasks="data.tasks.length"
        :currentTaskNumber="task.currentTaskNumber"
      />
    </template>

    <component
      :is="TASK_TYPES_UI[task.currentTask.type]"
      :data="task.currentTask"
      v-model:answer="answer.answerValue"
      @play-audio="speechStore.speak"
    />

    <template #footer>
      <LessonFooter
        :currentTask="task.currentTask"
        :isAnswerCorrect="answer.isCorrect"
        :isAnswerChecked="answer.isChecked"
      >
        <template #task-btn>
          <TaskBtn
            :variant="answer.variant"
            :disabled="!answer.isChecked && !answer.answerValue"
            @click="task.handleBtnClick"
          />
        </template>
      </LessonFooter>
    </template>
  </TaskLayout>
</template>
