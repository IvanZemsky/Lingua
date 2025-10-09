<script setup lang="ts">
import { needToShowTranslation } from "@/entities/language"
import AnswerMsg from "./answer-msg.vue"
import { useVariantStore } from "@/features/language/model/variant-store/variant-store"
import { storeToRefs } from "pinia"

defineEmits<{
  (e: "skip"): void
}>()

const { answer, task } = storeToRefs(useVariantStore())
const { currentTask } = task.value
const { isChecked, isCorrect } = answer.value
</script>

<template>
  <AnswerMsg v-if="isChecked && currentTask" :is-answer-correct="isCorrect">
    <p v-if="isCorrect">
      Correct <br />
      <span class="text-[18px]" v-if="needToShowTranslation(currentTask)">
        Translation: {{ currentTask.translation }}
      </span>
    </p>
    <p v-if="isChecked && !isCorrect">
      Incorrect. Please, try again or
      <span class="underline" @click="$emit('skip')">skip</span>.
    </p>
  </AnswerMsg>
</template>
