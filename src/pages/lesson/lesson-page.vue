<script setup lang="ts">
import {
  useGetVariantByNumberInLessonQuery,
  needToShowTranslation,
} from "@/entities/language"
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

const params = useGetPageParams()

const { data, isFetching, error } = useGetVariantByNumberInLessonQuery(params)
const speechStore = useSpeechStore()

const answer = useAnswer()
const task = useTask(data, answer)
</script>

<template>
  <p v-if="isFetching">Loading...</p>
  <p v-if="error">An error occurred</p>

  <TaskLayout v-if="data && task.currentTask.value">
    <template #header>
      <VariantHeader
        :totalTasks="data.tasks.length"
        :currentTaskNumber="task.currentTaskNumber.value"
      />
    </template>

    <component
      :is="TASK_TYPES_UI[task.currentTask.value.type]"
      :data="task.currentTask.value"
      v-model:answer="answer.answerValue.value"
      @play-audio="speechStore.speak"
    />

    <template #footer>
      <LessonFooter
        :isAnswerCorrect="answer.isCorrect.value"
        :isAnswerChecked="answer.isChecked.value"
      >
        <template #answer-msg>
          <p v-if="answer.isCorrect.value">
            Correct <br />
            <span
              class="text-[18px]"
              v-if="needToShowTranslation(task.currentTask.value)"
            >
              Translation: {{ task.currentTask.value.translation }}
            </span>
          </p>
          <p
            v-if="answer.isChecked.value && !answer.isCorrect.value"
          >
            Incorrect. Please, try again or skip.
          </p>
        </template>
        <template #task-btn>
          <TaskBtn
            :variant="answer.variant.value"
            @click="task.handleBtnClick"
          />
        </template>
      </LessonFooter>
    </template>
  </TaskLayout>
</template>
