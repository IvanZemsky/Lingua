<script setup lang="ts">
import { TASK_TYPES_TITLES } from "../../model/index"
import type { UseSpeechSynthesisOptions } from "@vueuse/core"
import TextSelectWord from "../words/text-select-word.vue"
import TaskWord from "../words/task-word.vue"
import type { TaskSelectWordByImage } from "@/entities/language/model/task"

type Props = {
  data: TaskSelectWordByImage
}

const { data } = defineProps<Props>()

defineEmits<{
  (e: "play-audio", text: string, options?: UseSpeechSynthesisOptions): void
}>()

const answer = defineModel<string>("answer", {
  required: true,
})
</script>

<template>
  <div class="flex flex-col gap-4 grow-1">
    <h1 class="font-bold text-[25px] font-montserrat">
      {{ TASK_TYPES_TITLES[data.type] }}
    </h1>

    <p class="text-xl">
      <TaskWord
        :word="data.wordToGuess"
        @click="$emit('play-audio', data.wordToGuess.text)"
      />
    </p>

    <TextSelectWord v-model="answer" :words="data.words" />
  </div>
</template>
