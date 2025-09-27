<script setup lang="ts">
import { needToShowTranslation, type Task } from "@/entities/language"
import { AnswerMsg } from "@/features/language"

const { isAnswerCorrect, isAnswerChecked } = defineProps<{
  isAnswerCorrect: boolean
  isAnswerChecked: boolean
  currentTask: Task
}>()
</script>

<template>
  <slot name="task-btn" />

  <AnswerMsg v-if="isAnswerChecked" :is-answer-correct="isAnswerCorrect">
    <p v-if="isAnswerCorrect">
      Correct <br />
      <span class="text-[18px]" v-if="needToShowTranslation(currentTask)">
        Translation: {{ currentTask.translation }}
      </span>
    </p>
    <p v-if="isAnswerChecked && !isAnswerCorrect">
      Incorrect. Please, try again or skip.
    </p>
  </AnswerMsg>
</template>
