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
} from "@/features/language"
import { computed, ref } from "vue"
import { useGetPageParams } from "./use-get-page-params"
import LessonFooter from "./lesson-footer.vue"

const params = useGetPageParams()

const { data, isFetching, error } = useGetVariantByNumberInLessonQuery(params)
const speechStore = useSpeechStore()

const currentTaskNumber = ref(1)

const answer = ref<string>("")
const isAnswerCorrect = ref(false)
const isAnswerChecked = ref(false)
const answerVariant = computed(getVariant)

const currentTask = computed(() =>
  data.value?.tasks.find((t) => t.number === currentTaskNumber.value),
)

function checkAnswer() {
  if (!currentTask.value) return

  const isCorrect = currentTask.value.results.includes(
    answer.value.trim().toLowerCase(),
  )

  console.log(currentTask.value.results, answer.value)

  isAnswerCorrect.value = isCorrect
  isAnswerChecked.value = true
}

function handleTaskBtnClick() {
  const variant = answerVariant.value

  if (variant === "notChecked") {
    checkAnswer()
  }
  if (variant === "correct") {
    answer.value = ""
    currentTaskNumber.value++
    isAnswerChecked.value = false
  }
  if (variant === "incorrect") {
    isAnswerChecked.value = false
  }
}

function getVariant() {
  if (!isAnswerChecked.value) return "notChecked"
  return isAnswerCorrect.value ? "correct" : "incorrect"
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
      <LessonFooter
        :isAnswerCorrect="isAnswerCorrect"
        :isAnswerChecked="isAnswerChecked"
      >
        <template #answer-msg>
          <p v-if="isAnswerCorrect">
            Correct <br />
            <span class="text-[18px]" v-if="needToShowTranslation(currentTask)">
              Translation: {{ currentTask.translation }}
            </span>
          </p>
          <p v-if="isAnswerChecked && !isAnswerCorrect">
            Incorrect. Please, try again or skip.
          </p>
        </template>
        <template #task-btn>
          <TaskBtn :variant="answerVariant" @click="handleTaskBtnClick" />
        </template>
      </LessonFooter>
    </template>
  </TaskLayout>
</template>
