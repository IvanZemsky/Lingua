<script setup lang="ts">
import { needToShowTranslation, type Task } from "@/entities/language"
import { AnswerMsg } from "@/features/language"

defineProps<{
  isAnswerCorrect: boolean
  isAnswerChecked: boolean
  currentTask: Task
}>()

defineEmits<{
  (e: "skip"): void
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
      Incorrect. Please, try again or
      <span class="underline" @click="$emit('skip')">skip</span>.
    </p>
  </AnswerMsg>
</template>
