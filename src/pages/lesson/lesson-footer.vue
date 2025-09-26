<script setup lang="ts">
import { AnswerMsg } from "@/features/language"

const { isAnswerCorrect, isAnswerChecked } = defineProps<{
  isAnswerCorrect: boolean
  isAnswerChecked: boolean
}>()

</script>

<template>
  <slot name="task-btn" />

  <AnswerMsg v-if="isAnswerChecked" :is-answer-correct="isAnswerCorrect">
    <slot name="answer-msg" />
  </AnswerMsg>
</template>
