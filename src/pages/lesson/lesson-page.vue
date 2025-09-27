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
  useResult,
  LessonEndScreen,
} from "@/features/language"
import { UiButton } from "@/shared/ui"
import { useGetPageParams } from "./use-get-page-params"
import LessonFooter from "./lesson-footer.vue"
import { reactive } from "vue"
import { RouterLink } from "vue-router"

const params = useGetPageParams()

const { data, isFetching, error } = useGetVariantByNumberInLessonQuery(params)
const speechStore = useSpeechStore()

const answer = reactive(useAnswer())
const result = reactive(useResult())
const task = reactive(useTask(data, answer, result))
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
      v-if="task.state === 'in-progress' && task.currentTask"
      v-model:answer="answer.answerValue"
      :is="TASK_TYPES_UI[task.currentTask.type]"
      :data="task.currentTask"
      @play-audio="speechStore.speak"
    />
    <LessonEndScreen v-else :result="result.result" />

    <template #footer>
      <LessonFooter
        v-if="task.currentTask && task.state === 'in-progress'"
        :current-task="task.currentTask"
        :is-answer-correct="answer.isCorrect"
        :is-answer-checked="answer.isChecked"
        @skip="task.skip"
      >
        <template #task-btn>
          <TaskBtn
            :variant="answer.variant"
            :disabled="!answer.isChecked && !answer.answerValue"
            @click="task.handleBtnClick"
          />
        </template>
      </LessonFooter>
      <UiButton
        v-if="task.state === 'finished'"
        :as="RouterLink"
        :to="`/sections/${params.sectionNumber}`"
        class="w-full text-xl h-14 font-semibold uppercase"
      >
        Continue
      </UiButton>
    </template>
  </TaskLayout>
</template>
