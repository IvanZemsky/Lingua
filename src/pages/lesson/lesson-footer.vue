<script setup lang="ts">
import { TaskBtn, useVariantStore, LessonAnswerMsg } from "@/features/language"
import { storeToRefs } from "pinia"
import { UiButton } from "@/shared/ui"
import { RouterLink } from "vue-router"

defineProps<{ sectionNumber: number }>()

const { task, answer } = storeToRefs(useVariantStore())
</script>

<template>
  <div class="w-full" v-if="task.currentTask && task.state === 'in-progress'">
    <TaskBtn
      :variant="answer.variant"
      :disabled="!answer.isChecked && !answer.answerValue"
      @click="task.handleBtnClick"
    />

    <LessonAnswerMsg
      v-if="answer.isChecked"
      :section-number="sectionNumber"
      @skip="task.skip"
    />
  </div>

  <UiButton
    v-if="task.state === 'finished'"
    :as="RouterLink"
    :to="`/sections/${sectionNumber}`"
    class="w-full text-xl h-14 font-semibold uppercase"
  >
    Continue
  </UiButton>
</template>
